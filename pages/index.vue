<template>
  <section class>
    <div class="container section is-medium has-text-centered">
      <h1 class="title is-enormous">
        WELCOME
        <span :v-if="invitee">{{invitee}}</span>
      </h1>
      <h2 class="subtitle is-size-3">into a new green era of effortless movement</h2>
    </div>
    <!-- <Hero :title="header.title" :subtitle="header.subtitle" :image="header.image" :cssStyles="header.cssStyles"/>-->
    <div class="container" style="padding-top: 2rem">
      <OIllustration :imageUrl="illustration.imageUrl"/>
      <div class="section">
        <p class="has-text-centered is-size-4 has-text-weight-normal">
          imagine yourself cruising
          <b class="has-text-weight-bold">every city</b> on any sharing
          <b class="has-text-weight-bold">eBike</b>, sharing
          <b class="has-text-weight-bold">eScooter</b> and sharing
          <b class="has-text-weight-bold">eCar</b>
          <br>
          <span class="is-size-3">
            all within
            <b class="has-text-primary has-text-weight-bold">one</b> simple
            <b class="has-text-primary has-text-weight-bold">flatrate</b>
          </span>
        </p>
      </div>
      <OVimeo :videoLink="vimeo.videoLink"/>
    </div>
    <div class="is-medium container has-text-centered">
      <img :src="buildLogoUrl()" alt="motion earth" style="width: 15rem; padding: 4rem 0">

      <div class="has-text-centered">
        <h1 class="title is-size-2">MOTION EARTH</h1>
        <h2 class="subtitle is-size-4">invites you to become the green leader of your city</h2>
      </div>
    </div>
    <section class="container section">
      <OExplain/>
    </section>
    <div class="container section has-text-centered">
      <nuxt-link class="button is-primary is-large is-fullwidth" to="/selectCity">VOTE NOW</nuxt-link>
    </div>
  </section>
</template>

<script>
import OIllustration from "~/components/OIllustration";
import OVimeo from "~/components/OVimeo";
import OExplain from "~/components/OExplain";

export default {
  data() {
    return {
      invitee: "CHUCK",
      illustration: {
        imageUrl: "banner.png"
      },
      vimeo: {
        videoLink: "https://player.vimeo.com/video/323399729"
      }
    };
  },
  methods: {
    buildLogoUrl: function() {
      return require(`@/assets/motionearth.png`);
    }
  },
  components: {
    OIllustration,
    OVimeo,
    OExplain
  }
};
</script>

<style scoped>
.is-enormous {
  font-size: 3.5rem;
}
</style>
