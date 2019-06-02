<template>
  <div>
    <OProfile />
    <OFooter :footer="footer" />
  </div>
</template>

<script>
// import ORankupModal from '~/components/ORankupModal.vue'
import OFooter from '@/layouts/OFooter.vue'
import OProfile from '@/components/OProfile.vue'

export default {
  components: {
    OProfile,
    OFooter
  },
  middleware: ['authentication'],

  data() {
    return {
      footer: {
        title: 'Earn ØMO Credits',
        to: '',
        styles: 'is-fullwidth is-primary'
      }
      // isRankupModalActive: false
    }
  }
}
</script>
