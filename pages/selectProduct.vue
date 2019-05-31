<template>
  <section>
    <div class="has-text-centered">
      <p class="title has-text-blue is-size-1 is-size-3-mobile">
        CHOOSE THE SERVICE
      </p>
      <p class="subtitle is-4 is-size-5-mobile">
        which you would like to have in your city
      </p>
    </div>
    <div class="container">
      <Products />
      <!-- <OPerkSelect :perks="perks" /> -->
    </div>
  </section>
</template>

<script>
import Products from '~/components/OProducts.vue'

export default {
  components: {
    Products
  },
  data() {
    return {}
  }
}
</script>
