<template>

  <section class="columns">

    <div class="column is-two-thirds">
      <div id="map-wrap1" style="height: 60vh">
        <no-ssr>
          <l-map ref="leafletMap" :zoom=13 :center="[48.134136, 11.588035]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"></l-tile-layer>
          </l-map>
        </no-ssr>
      </div>
      
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Vehicle has been opened
            </h1>
          </div>
        </div>
      </section>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Vehicle has been started
            </h1>
          </div>
        </div>
      </section>

      <div id="map-wrap" style="height: 60vh">
        <no-ssr>
          <l-map ref="leafletMap2" :zoom=13 :center="[48.134136, 11.588035]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"></l-tile-layer>
            <!--<l-tile-layer url="http://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=cJoX1MQAOOQaqI3ezAR8&app_code=II15gTFlSok2GRWWHm0kIw"></l-tile-layer>-->
            <!--<l-marker v-for="marker in pois.concat(vehicels)" :lat-lng="marker" :key="marker.id"></l-marker>-->
          </l-map>
        </no-ssr>
      </div>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Stop vehicle
            </h1>
          </div>
        </div>
      </section>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Lock vehicle
            </h1>
          </div>
        </div>
      </section>

    </div>

    <div class="column is-one-third" style="padding: 3rem">
      <aside class="menu sticky">
        <location-chooser :title="'STARTING POINT'"
                          :placeholder="startLocationPlaceholder"
                          :icon="'crosshairs-gps'"
                          :use-current-position="true"
                          v-on:accept="onAcceptStart"
                          v-on:reset=""></location-chooser>
        <br/>
        <location-chooser :title="'DESTINATION'"
                          :placeholder="'Where do you want to go?'"
                          v-on:accept="onAcceptDestination"
                          v-on:reset=""></location-chooser>
        <br/>
        <ul class="menu-list">
          <p class="menu-label">
            Travel
          </p>
          <div class="button is-success is-fullwidth">Start Route & Reserve Vehicle</div><br>
          <div class="button is-success is-fullwidth">Open Vehicle</div><br>
          <div class="button is-success is-fullwidth">Start Vehicle</div><br>
          <div class="button is-success is-fullwidth">Navigate & Drive</div><br>
          <p class="menu-label">
            Finish journey
          </p>
          <div class="button is-success is-fullwidth">Stop Vehicle</div><br>
          <div class="button is-success is-fullwidth">Lock Vehicle</div><br>
        </ul>
      </aside>
      </div>
  </section>
</template>

<style>
  .leaflet-control-container .leaflet-routing-container-hide {
    display: none;
  }
  .sticky	{
    position: sticky;
    top: 5rem;
  }
</style>


<script>

  import LocationChooser from "../components/LocationChooser";

  export default {
    mounted() {
      this.$nextTick(() => {
        if (!process.browser)
          return;

        const leaflet = require('leaflet');
        const leafletRoutingMachine = require('leaflet-routing-machine');
        const leafletGeometryUtil = require('leaflet-geometryutil');
        const map = this.$refs.leafletMap.mapObject;

        this.vehicleLayers.forEach(o => map.removeLayer(o));
        this.vehicleLayers = this.vehicles.map(o => {
          return L.marker([o.lat, o.lng]).addTo(map);
        });
      });
    },
    methods: {
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

        const leaflet = require('leaflet');
        const leafletRoutingMachine = require('leaflet-routing-machine');
        const leafletGeometryUtil = require('leaflet-geometryutil');
        const map = this.$refs.leafletMap.mapObject;

        this.vehicleLayers.forEach(o => map.removeLayer(o));
        this.vehicleLayers = this.vehicles.map(o => {
          return L.marker([o.lat, o.lng]).addTo(map);
        });


        if (this.startLocationMarker) {
          map.removeLayer(this.startLocationMarker);
        }
        if (this.startLocation) {
          this.startLocationMarker = L.marker([this.startLocation.lat, this.startLocation.lng]).addTo(map);
        }
        if (this.destinationLocationMarker) {
          map.removeLayer(this.destinationLocationMarker);
        }
        if (this.destinationLocation) {
          this.destinationLocationMarker = L.marker([this.destinationLocation.lat, this.destinationLocation.lng]).addTo(map);
        }

        if (this.startLocation && this.destinationLocation) {
            //let layers = map._layers;
            // TODO: http://makinacorpus.github.io/Leaflet.GeometryUtil/tutorial-closest.html
            let closestVehicleLayer = L.GeometryUtil.closestLayer(map, this.vehicleLayers, { lat: this.startLocation.lat, lng: this.startLocation.lng });

            console.log("closestVehicleLayer", closestVehicleLayer);
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
              waypoints: waypoints
            })
            .on('routeselected', function(e) {
              console.log("Chosen route:", e);
            })
            .addTo(map);

            routeControl.hide();
        }
      }
    },
    data() {
      return {
        startLocationMarker: null,
        destinationLocationMarker: null,
        startLocationPlaceholder: "Finding your current position ...",
        vehicles: [{
          id:1,
          type: "cargo-bike",
          remaining_distance: 21,
          lat: 48.133572,
          lng: 11.581969
        },{
          id:2,
          type: "cargo-bike",
          remaining_distance: 9,
          lat: 48.150340,
          lng: 11.596020
        },{
          id:3,
          type: "scooter",
          remaining_distance: 12,
          lat: 48.150340,
          lng: 11.596020
        },{
          id:4,
          type: "bike",
          remaining_distance: 45,
          lat: 48.118511,
          lng: 11.567345
        }],
        vehicleLayers: [],
        startLocation: null,
        destinationLocation: null,
        vehicleLayer: null
      }
    },
    components: {
      LocationChooser
    }
  }
</script>
