<template>
  <div>
    <OInvite />
    <OFooter :action="footer.action" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OInvite from '@/components/OInvite.vue'
import OFooter from '@/layouts/OFooter.vue'

@Component({
  components: {
    OInvite,
    OFooter
  },
  data() {
    return {
      footer: {
        action: {
          name: 'tell me more',
          link: '/selectCity',
          color: 'is-primary'
        }
      }
    }
  }
})
export default class Index extends Vue {}
</script>
