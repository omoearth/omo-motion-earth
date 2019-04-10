<template>
  <section>
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
         sdfsd
        
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
  </section>
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
