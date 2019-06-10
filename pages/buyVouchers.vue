<template>
  <div>
    <OVoucher />
  </div>
</template>

<script>
import OVoucher from '@/components/OVoucher.vue'

export default {
  components: {
    OVoucher
  },
  created() {
    this.$store.commit('setActions', [
      {
        name: 'register',
        link: '/registerUser',
        color: 'is-primary'
      }
    ])
  }
}
</script>
