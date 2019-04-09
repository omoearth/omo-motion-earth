<template>
  <div id="map-wrap" ref="leafletMap" style="height: 100vh">
    <no-ssr>
      <l-map :zoom=13 :center="[47.413220, -1.219482]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="poi in pois" :lat-lng="poi" :key="poi.id"></l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>

  export default {
    mounted() {
      this.$nextTick(() => {
        console.log(this.$refs.leafletMap);
      })
    },
    data() {
      return {
        pois: [
          {
            id:1,
            lat: 47.413220,
            lon: -1.219482
          },
          {
            id:2,
            lat: 46.413220,
            lon: -1.219482
          },
          {
            id:3,
            lat: 45.413220,
            lon: -1.219482
          },
          {
            id:4,
            lat: 44.413220,
            lon: -1.219482
          }
        ]
      }
    },
    components: {}
  }
</script>


<style>

</style>
