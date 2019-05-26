<template>
  
  <div>
    <Navbar />
    <nuxt-child />
  </div>

</template>

<script>
  import Navbar from '~/components/Navbar'

  export default {
    data() {
      return {
      }
    },
    components: {
      Navbar
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