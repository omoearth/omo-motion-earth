<template>
  <div>
    <OHeader />
    <nuxt-child />
  </div>
</template>

<script>
import OHeader from '~/components/OHeader'

export default {
  components: {
    OHeader
  },
  data() {
    return {}
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
