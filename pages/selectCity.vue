<template>
  <div>
    <OMapBox :props="props"/>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="has-text-centered">
            <img :src="buildImageUrl()" style="padding: 2rem 2rem">
            <h1 class="title is-4">CHOOSE YOUR HOME</h1>
            <h2 class="subtitle is-5">where you like to have the mobility flatrate</h2>
          </div>
        </div>
      </div>
    </section>
    <div class="fixed-to-bottom">
      <div class="container">
        <OCitySelect/>
        <nuxt-link class="button is-dark is-medium is-fullwidth" to="/registerUser">SAVE VOTE</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import OCitySelect from "~/components/OCitySelect";
import OMapBox from "~/components/OMapBox";

export default {
  data() {
    return {
      props: {
        zoom: 11,
        location: null,
        center: [11.576124, 48.137154]
      }
    };
  },
  components: {
    OCitySelect,
    OMapBox
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/icons/vote.svg`);
    }
  }
};
</script>

