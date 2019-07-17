<template>
  <div>
    <div class="hero is-medium is-light">
      <div class="hero-body">
        <div class="has-text-centered">
          <div
            class="title is-size-1 is-size-1-tablet is-size-4-mobile"
            style="padding-bottom: 1rem"
          >THE MISSION</div>
          <div
            class="subtitle has-text-weight-medium is-size-2 is-size-4-tablet is-size-6-mobile has-text-dark"
          >
            greenfluence your city to become the global leader of a smart and
            clean sharing movement
          </div>
        </div>
      </div>
    </div>
    <div class="section is-medium columns is-mobile has-text-centered">
      <div v-for="item in items" :key="item.icon" class="column is-one-third">
        <img :src="buildImageUrl(item.icon)" />
        <h1 class="title is-size-4 is-size-7-mobile">{{ item.title }}</h1>
        <h2 class="subtitle is-size-4 is-size-7-mobile">{{ item.subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return {
      items: [
        {
          title: "1. SUBSCRIBE",
          subtitle: "to the vision and inspire your fellow citizens",
          icon: "invite"
        },
        {
          title: "2. CROWDFUND",
          subtitle: "and unlock new mobility providers with each 100.000€",
          icon: "vote"
        },
        {
          title: "3. UNLOCK",
          subtitle: "greenfluencer rewards when we reach 1.000.000 supporters",
          icon: "win"
        }
      ]
    };
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.svg`);
    }
  }
})
export default class OmoMission extends Vue {}
</script>
