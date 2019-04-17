<template>
  <div>
    <Navbar />
    <nuxt/>
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

<style>
  .navbar-item {
    color: #4a4a4a !important;

  }

  html {
    scroll-behavior: smooth
  }
</style>
