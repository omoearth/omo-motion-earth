<template>
    <section class="is-fullheight">

      <div id="map-wrap1" style="height: 60vh">
        <no-ssr>
          <l-map ref="leafletMap" :zoom=13 :center="[48.134136, 11.588035]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"></l-tile-layer>
          </l-map>
        </no-ssr>
      </div>
      <div style="height: 34vh">
        <location-chooser
          style="padding: 2rem 2rem 0 2rem"
          :placeholder="startLocationPlaceholder"
          :icon="'crosshairs-gps'"
          :use-current-position="true"
          v-on:accept="onAcceptStart"
          v-on:reset="">
        </location-chooser>

        <location-chooser
          style="padding: 2rem"
          :placeholder="'Where do you want to go?'"
          v-on:accept="onAcceptDestination"
          v-on:reset="">
        </location-chooser>
        <div style="padding: 0 2rem">
        <nuxt-link class="button is-primary is-medium is-fullwidth is-rounded" to="/travel/find-vehicle">START JOURNEY</nuxt-link>
        </div>
      </div>
    </section>
</template>

<script>
  import LocationChooser from "~/components/LocationChooser";

  export default {
    mounted() {
      this.$nextTick(() => {
        if (!process.browser)
          return;

        const map = this.$refs.leafletMap.mapObject;
        this.updateVehicles(map);
      });
    },
    data() {
      return {
        startLocationMarker: null,
        destinationLocationMarker: null,
        startLocationPlaceholder: "Finding your current position ...",
        buttonEnabled:false,
        vehicles: [{
          id:1,
          type: "minicar",
          remaining_distance: 21,
          lat: 48.133572,
          lng: 11.581969
        },{
          id:2,
          type: "pedelec",
          remaining_distance: 9,
          lat: 48.150340,
          lng: 11.596020
        },{
          id:3,
          type: "pedelec",
          remaining_distance: 12,
          lat: 48.150340,
          lng: 11.596020
        },{
          id:4,
          type: "minicar",
          remaining_distance: 45,
          lat: 48.118511,
          lng: 11.567345
        },{
          id:5,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.119970,
          lng: 11.511351
        },{
          id:6,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.124501,
          lng: 11.542274
        },{
          id:7,
          type: "mincar",
          remaining_distance: 45,
          lat: 48.156683,
          lng: 11.588880
        },{
          id:8,
          type: "minicar",
          remaining_distance: 45,
          lat: 48.173786,
          lng: 11.561777
        },{
          id:9,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.179649,
          lng: 11.497985
        },{
          id:10,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.083811,
          lng: 11.513848
        },{
          id:11,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.090979,
          lng: 11.572390
        },{
          id:12,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.070461,
          lng: 11.531489
        },{
          id:13,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.080078,
          lng: 11.667117
        },{
          id:14,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.108454,
          lng: 11.732158
        },{
          id:15,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.112596,
          lng: 11.684432
        },{
          id:16,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.146821,
          lng: 11.723908
        },{
          id:17,
          type: "scooter",
          remaining_distance: 45,
          lat: 48.174935,
          lng: 11.632218
        },{
          id:18,
          type: "scooter",
          remaining_distance: 45,
          lat: 48.136383,
          lng: 11.562921
        },{
          id:19,
          type: "scooter",
          remaining_distance: 45,
          lat: 48.158902,
          lng: 11.510128
        }],
        vehicleLayers: [],
        startLocation: null,
        destinationLocation: null,
        vehicleLayer: null
      }
    },
    methods: {
      updateVehicles: function (map, removeOnly) {
        var miniscooter = new L.Icon({iconUrl: '/map/pin_miniscooter.png'});
        var minicar = new L.Icon({iconUrl: '/map/pin_minicar.png'});
        var pedelec = new L.Icon({iconUrl: '/map/pin_pedelec.png'});
        var scooter = new L.Icon({iconUrl: '/map/pin_scooter.png'});

        this.vehicleLayers.forEach(o => map.removeLayer(o));
        if (!removeOnly) {
          this.vehicleLayers = this.vehicles.map(o => {
            switch (o.type) {
              case "minicar":
                return L.marker([o.lat, o.lng], {icon: minicar}).addTo(map);
              case "miniscooter":
                return L.marker([o.lat, o.lng], {icon: miniscooter}).addTo(map);
              case "pedelec":
                return L.marker([o.lat, o.lng], {icon: pedelec}).addTo(map);
              case "scooter":
                return L.marker([o.lat, o.lng], {icon: scooter}).addTo(map);
            }
          });
        }
      },
      onAcceptStart(loc) {
        this.startLocation = loc;
        this.refreshMap();
        console.log("Accept start:", this.startLocation);
      },
      onAcceptDestination(loc) {
        this.destinationLocation = loc;
        this.refreshMap();
        console.log("Accept dest:", this.destinationLocation);
      },
      refreshMap() {
        if (!process.browser)
          return;

        this.$nextTick(() => {
          //const lrmHere = require('lrm-here');
          const leaflet = require('leaflet');
          const leafletRoutingMachine = require('leaflet-routing-machine');
          const leafletGeometryUtil = require('leaflet-geometryutil');

          const map = this.$refs.leafletMap.mapObject;

          this.updateVehicles(map);

          var start = new L.Icon({iconUrl: '/map/pin_livelocation.png'});
          var destination = new L.Icon({iconUrl: '/map/pin_goal.png'});

          if (this.startLocationMarker) {
            map.removeLayer(this.startLocationMarker);
          }
          if (this.startLocation) {
            this.startLocationMarker = L.marker([this.startLocation.lat, this.startLocation.lng], {icon: start}).addTo(map);
          }
          if (this.destinationLocationMarker) {
            map.removeLayer(this.destinationLocationMarker);
          }
          if (this.destinationLocation) {
            this.destinationLocationMarker = L.marker([this.destinationLocation.lat, this.destinationLocation.lng], {icon: destination}).addTo(map);
          }

          if (this.startLocation && this.destinationLocation) {
            let closestVehicleLayer = L.GeometryUtil.closestLayer(map, this.vehicleLayers, {
              lat: this.startLocation.lat,
              lng: this.startLocation.lng
            });

            let waypoints = [];
            if (closestVehicleLayer) {
              waypoints = [
                L.latLng(this.startLocation.lat, this.startLocation.lng),
                L.latLng(closestVehicleLayer.latlng.lat, closestVehicleLayer.latlng.lng),
                L.latLng(this.destinationLocation.lat, this.destinationLocation.lng)
              ];
            } else {
              waypoints = [
                L.latLng(this.startLocation.lat, this.startLocation.lng),
                L.latLng(this.destinationLocation.lat, this.destinationLocation.lng)
              ];
            }
            let routeControl = L.Routing.control({
              waypoints: waypoints,
              //router: new L.Routing.Here('cJoX1MQAOOQaqI3ezAR8', 'II15gTFlSok2GRWWHm0kIw'),
              createMarker: function (i, wp, nWps) {
                if (i === 0) {
                  return L.marker(wp.latLng, {icon: start});
                } else if (i === nWps - 1) {
                  return L.marker(wp.latLng, {icon: destination});
                } else {
                  var scooter = new L.Icon({iconUrl: '/map/pin_scooter.png'});
                  return L.marker(wp.latLng, {icon: scooter});
                }
              }
            })
            .on('routeselected', function (e) {
              console.log("Chosen route:", e);
            })
            .addTo(map);

            routeControl.hide();
            this.updateVehicles(map, true);
          }
        });
      }
    },
    components: {
      LocationChooser
    }
  }
</script>

<style>
</style>
