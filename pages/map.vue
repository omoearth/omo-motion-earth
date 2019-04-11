<template>
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
          <l-marker v-for="poi in pois" :lat-lng="poi" :key="poi.id"></l-marker>
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
            if (process.browser) {
              const leaflet = require('leaflet');
              const leafletRoutingMachine = require('leaflet-routing-machine');
              const map = this.$refs.leafletMap.mapObject;

              let routeControl = L.Routing.control({
                waypoints: [
                  L.latLng(this.startLocation.lat, this.startLocation.lng),
                  L.latLng(this.destinationLocation.lat, this.destinationLocation.lng)
                ]
              })
              .on('routeselected', function(e) {
                console.log("Chosen route:", e);
              })
              .addTo(map);

              routeControl.hide();
            }
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
        startLocation: null,
        destinationLocation: null
      }
    },
    components: {
      LocationChooser
    }
  }
</script>
