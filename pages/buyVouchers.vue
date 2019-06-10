<template>
  <div>
    <OVoucher />
    <OFooter :action="footer.action" />
  </div>
</template>

<script>
import OVoucher from '@/components/OVoucher.vue'
import OFooter from '@/layouts/OFooter.vue'

export default {
  components: {
    OVoucher,
    OFooter
  },
  data() {
    return {
      footer: {
        action: {
          name: 'BUY @ STARTNEXT',
          link: '/registerUser',
          color: 'is-primary'
        }
      }
    }
  }
}
</script>
