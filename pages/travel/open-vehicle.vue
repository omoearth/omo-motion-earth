<template>
  <section id="1_start" class="is-fullheight">
      <div id="map-wrap" style="height: 60vh">
      <no-ssr>
        <l-map ref="leafletMap" :zoom=13 :center="[48.134136, 11.588035]">
          <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"></l-tile-layer>
        </l-map>
      </no-ssr>
    </div>
    <div style="height: 34vh; margin: 2rem">
      <div class="columns is-mobile">           
        <div class="column is-half">
          <div class="card" style="padding: 1rem">
            <b>ADDRESS OF VEHICLE</b><br>
            {Street}
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="card" style="padding: 1rem">
            <b>DIST</b> <br>
            {350m}
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="card" style="padding: 1rem">
            <b>MIN</b> <br>
            {1,5min}
          </div>
        </div>        
      </div>
      <div class="button is-primary is-fullwidth">Open Vehicle</div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    components: {
    }
  }
</script>

<style>
</style>
