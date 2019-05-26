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
        <nav class="level is-mobile" style="padding: 2rem 0">
            <div class="level-item has-text-centered">
                <div>
                    <p class="subtitle">{street + number}</p>
                    <p class="heading">Address</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>                  
                    <p class="title">{2.5}</p>
                    <p class="heading">KM</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">16</p>
                    <p class="heading">MIN</p>      
                </div>
            </div>
        </nav>
      <nuxt-link class="button is-primary is-medium is-fullwidth is-rounded" to="/travel/finish">END JOURNEY</nuxt-link>
      
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
