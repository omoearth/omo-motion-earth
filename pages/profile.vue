<template>
  <div>
    <OProfile />
    <OFooter :action="footer.action" />
  </div>
</template>

<script>
import OProfile from '@/components/OProfile.vue'
import OFooter from '@/layouts/OFooter.vue'

export default {
  components: {
    OProfile,
    OFooter
  },
  data() {
    return {
      footer: {
        action: {
          name: 'create new invite',
          link: '/inviteLink',
          color: 'is-primary'
        }
      }
    }
  },
  middleware: ['authentication']
}
</script>
