<template>
  <div class="section is-fullheight">
    <section class="container has-text-centered">
      <h1 class="title">
        OUR SERVICE
      </h1>
      <h2 class="subtitle">
        select the package you would like to use in your city
      </h2>
    </section>
    <div class="container">
      <OOffers />
    </div>
  </div>
</template>

<script>
import OOffers from '~/components/OOffers.vue'

export default {
  components: {
    OOffers
  },
  data() {
    return {}
  }
}
</script>
