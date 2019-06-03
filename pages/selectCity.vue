<template>
  <div>
    <OMapLeaflet :props="props" />
    <!-- <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered">
            <img :src="buildImageUrl()" style="padding: 2rem 2rem">
            <h1 class="title is-4">CHOOSE YOUR HOME</h1>
            <h2 class="subtitle is-5">where you like to have the mobility flatrate</h2>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
import OMapLeaflet from '~/components/OMapLeaflet.vue'

export default {
  components: {
    OMapLeaflet
  },
  data() {
    return {
      props: {
        zoom: 10,
        location: [48.137154, 11.576124],
        center: [48.137154, 11.576124]
      }
    }
  }
}
</script>
