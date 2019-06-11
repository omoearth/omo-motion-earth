<template>
  <div>
    <div class="container section">
      <OCityRanking />
    </div>
  </div>
</template>

<script>
import OCityRanking from '~/components/OCityRanking.vue'

export default {
  components: {
    OCityRanking
  },
  data() {
    return {
      // isRankupModalActive: false
    }
  }
}
</script>
