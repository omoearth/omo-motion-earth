<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            OUR SERVICE
          </h1>
          <h2 class="subtitle"/>Select your favorite offer you would like to have in your city</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <OOffers />
    </div>
  </div>
</template>

<script>
import OOffers from '@/components/OOffers.vue'

export default {
  components: {
    OOffers
  },
  created() {
    this.$store.commit('setActions', [
      {
        name: 'go to voucher',
        link: '/buyVouchers',
        color: 'is-primary'
      }
    ])
  },
}
</script>
