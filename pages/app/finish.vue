<template>
  <section class="is-fullheight">
    <div class="background"></div>
    <div style="margin: 2rem">
      <nuxt-link class="button is-primary is-medium is-fullwidth is-rounded" to="/app/enter-route">START NEW JOURNEY</nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .background  {
    background-image: url('/happy.png');
    height: 80vh;
    background-repeat: no-repeat;
    background-position: center; 
  }
</style>