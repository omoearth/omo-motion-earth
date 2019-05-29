<template>
  <div>
    <section class="is-fullheight hero">
      <div class="hero-body">
        <div class="container">
          <OUserRegister/>
        </div>
      </div>
    </section>
    <div class="fixed-to-bottom">
      <div class="container">
        <OCitySelect/>
        <nuxt-link class="button is-dark is-medium is-fullwidth" to="profile">START NOW</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import OUserRegister from "~/components/OUserRegister";

export default {
  components: {
    OUserRegister
  }
};
</script>