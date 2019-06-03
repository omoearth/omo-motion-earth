<template>
  <div>
    <OProfile />
    <OFooter />
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

  middleware: ['authentication']
}
</script>
