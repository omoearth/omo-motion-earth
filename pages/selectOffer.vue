<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            OUR SERVICE
          </h1>
          <h2 class="subtitle" />select your favorite offer you would like to have in your city</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <OOffers />
    </div>
    <OFooter :action="footer.action" />
  </div>
</template>

<script>
import OOffers from '@/components/OOffers.vue'
import OFooter from '@/layouts/OFooter.vue'

export default {
  components: {
    OOffers,
    OFooter
  },
  data() {
    return {
      footer: {
        action: {
          name: 'next',
          link: '/buyVouchers',
          color: 'is-primary'
        }
      }
    }
  }
}
</script>
