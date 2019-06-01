<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  components: {},
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
