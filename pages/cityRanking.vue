<template>
  <div>
    <div class="container section">
      <OCityRanking />
    </div>

    <OFooter :footer="footer" />
  </div>
</template>

<script>
import OCityRanking from '~/components/OCityRanking.vue'
import OFooter from '@/layouts/OFooter.vue'

export default {
  components: {
    OCityRanking,
    OFooter
  },
  data() {
    return {
      footer: {
        title: 'EARN POINTS',
        to: '',
        styles: 'is-fullwidth is-primary'
      }
      // isRankupModalActive: false
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  }
}
</script>
