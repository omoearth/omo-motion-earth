<template>
  <div>
    <div class="container section has-text-centered">
      <h1 class="title is-enormous">
        WELCOME
        <!-- <span :v-if="invitee">{{invitee}}</span> -->
      </h1>
      <h2 class="subtitle is-size-3">to a new world of green mobility</h2>
    </div>
    <!-- <Hero :title="header.title" :subtitle="header.subtitle" :image="header.image" :cssStyles="header.cssStyles"/>-->
    <div class="container">
      <section class="id-medium">
        <img :src="banner">
      </section>

      <div class="section">
        <p class="has-text-centered is-size-4 has-text-weight-normal">
          imagine yourself cruising
          <b class="has-text-weight-bold">your city</b> on any
          <b class="has-text-weight-bold">sharing eScooter</b>,
          <b class="has-text-weight-bold">eBike</b> and
          <b class="has-text-weight-bold">eMiniCar</b>
          <br>
          <span class="is-size-3">
            all within
            <b class="has-text-primary has-text-weight-bold">one</b> simple app and
            <b class="has-text-primary has-text-weight-bold">flatrate</b>
          </span>
        </p>
      </div>
      <OVimeo :video-link="vimeo.videoLink"/>
    </div>
    <div class="is-medium container has-text-centered">
      <div class="section has-text-centered">
        <h1 class="title is-size-2">VOTE NOW</h1>
        <h2 class="subtitle is-size-4">to win the green mobility city race</h2>
      </div>
    </div>
    <section class="container section">
      <div class="has-text-centered">
        <div class="columns">
          <div v-for="item in items" :key="item.icon" class="column">
            <img :src="buildImageUrl(item.icon)" class="section" style="padding: 2rem 6rem">
            <h1 class="title is-4">{{ item.title }}</h1>
            <h2 class="subtitle is-5">{{ item.subtitle }}</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OVimeo from "@/components/OVimeo.vue";

@Component({
  name: "o-landing",
  components: { OVimeo },
  data() {
    return {
      invitee: "CHUCK",
      banner: "/banner.png",
      vimeo: {
        videoLink: "https://player.vimeo.com/video/340139809"
      },
      items: [
        {
          title: "1. VOTE",
          subtitle: "for your city to decide which city comes first",
          icon: "vote"
        },
        {
          title: "2. INSPIRE",
          subtitle: "your friends to collect green leadership points",
          icon: "invite"
        },
        {
          title: "3. WIN",
          subtitle: "lifelong flatrates and enjoy the green city race",
          icon: "win"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.svg`);
    }
  }
})
export default class OCity extends Vue {}
</script>

<style lang="scss" scoped>
</style>
