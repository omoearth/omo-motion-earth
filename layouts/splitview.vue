<template>
  <div>
    <Navbar />

    <nuxt/>

    <!-- <Footer /> -->

  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'

  export default {
    data() {
      return {
        showNav: false,
        items: [
          {
            title: 'Home',
            to: {name: 'index'}
          },
          {
            title: 'About Us',
            to: {name: 'about'}
          },
          {
            title: 'Map',
            to: {name: 'map'}
          },
          {
            title: 'Signup',
            to: {name: 'signup'}
          },
          {
            title: 'Login',
            to: {name: 'login'}
          },
          {
            title: 'Profile',
            to: {name: 'profile'}
          }
        ]
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
