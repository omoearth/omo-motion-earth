<template>
  <section class="is-fullheight">
    <div class="background"></div>
    <div style="margin: 2rem">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="title">25%</p>
            <p class="heading">BATTERY</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">20km</p>
            <p class="heading">Distance</p>
          </div>
        </div>
      </nav>
      <nuxt-link
        class="button is-primary is-medium is-fullwidth is-rounded"
        to="/app/navigation"
      >START ENGINE</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.background {
  background-image: url("/moke.jpg");
  height: 60vh;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
