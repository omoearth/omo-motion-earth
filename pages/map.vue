<template>

  <!-- <section>
    <div class="columns">
      <div class="column is-4" style="padding: 2rem">
         <b-field label="1. Your starting point">
          <b-input v-model="start" placeholder="Get browser location"></b-input>
         </b-field>
        <div></div>
        <b-field label="2. Where do you want to go?">
          <b-input v-model="goal" placeholder="Get Google POIs"></b-input>
        </b-field>
        <b-field label="3. Get fastest route" />
        Show route with scooter
        <br><br>
         <b-field label="4. start route" />
        Show route with scooter<br>
         <button class="button">Reserve vehicle</button>
      </div>
      <div class="column">
        <div id="map-wrap" ref="leafletMap" style="height: 100vh">
          <no-ssr>
            <l-map :zoom=13 :center="[47.413220, -1.219482]">
              <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"></l-tile-layer>
              <l-marker v-for="poi in pois" :lat-lng="poi" :key="poi.id"></l-marker>
            </l-map>
          </no-ssr>
        </div>
      </div>
    </div>
  </section> -->

  <div>
    <LocationChooser :use-current-position="true"
                     :start-expanded="true"
                     :title="'Where does your journey begin?'"
                     :short-title="'Start'"
                     v-on:accept="onAcceptStart"
                     v-on:reset="">
    </LocationChooser>
    <LocationChooser :use-current-position="false"
                     :title="'Where do you want to go?'"
                     :short-title="'Destination'"
                     v-on:accept="onAcceptDestination"
                     v-on:reset="">
    </LocationChooser>

    <div id="map-wrap" style="height: 100vh">
        <l-map ref="leafletMap" :zoom=13 :center="[48.134136, 11.588035]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker v-for="marker in pois.concat(vehicels)" :lat-lng="marker" :key="marker.id"></l-marker>
        </l-map>
    </div>
  </div>
</template>

<style>
  .leaflet-control-container .leaflet-routing-container-hide {
    display: none;
  }
</style>

<script>

  import LocationChooser from "../components/LocationChooser";

  export default {
    mounted() {
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
        this.pois = [];
        if (this.startLocation && this.destinationLocation) {
          this.$nextTick(() => {
            if (!process.browser)
              return;

            const leaflet = require('leaflet');
            const leafletRoutingMachine = require('leaflet-routing-machine');
            const leafletGeometryUtil = require('leaflet-geometryutil');
            const map = this.$refs.leafletMap.mapObject;

            let layers = map._layers;

            // TODO: http://makinacorpus.github.io/Leaflet.GeometryUtil/tutorial-closest.html
            let closestVehicleLayer = L.GeometryUtil.closestLayer(map, layers, { lat: this.startLocation.lat, lng: this.startLocation.lng });

            console.log("closestVehicleLayer", closestVehicleLayer);
            let waypoints = [];
            if (closestVehicleLayer) {
              waypoints = [
                L.latLng(this.startLocation.lat, this.startLocation.lng),
                L.latLng(closestVehicleLayer.lat, closestVehicleLayer.lng),
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
          })
        } else if (this.startLocation) {
          this.pois.push(this.startLocation);
        } else if (this.destinationLocation) {
          this.pois.push(this.destinationLocation);
        }
      }
    },
    data() {
      return {
        pois: [],
        vehicels: [{
          id: "1",
          status: "free",
          type: "scooter",
          range: 12.5,
          lat: 48.133572,
          lng: 11.581969
        },{
          id: "2",
          status: "free",
          type: "car",
          range: 52,
          lat: 48.129891,
          lng: 11.567864
        },{
          id: "3",
          status: "reserved",
          type: "car",
          range: 40,
          lat: 48.150340,
          lng: 11.596020
        },{
          id: "4",
          status: "free",
          type: "e-bike",
          range: 10,
          lat: 48.118511,
          lng: 11.567345
        }],
        startLocation: null,
        destinationLocation: null
      }
    },
    components: {
      LocationChooser
    }
  }
</script>
