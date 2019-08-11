<template>
  <div>
    <div class="hero is-light is-medium">
      <div class="hero-body">
        <div class="has-text-centered">
          <div class="title is-size-1 is-size-1-tablet is-size-4-mobile">
            HOW TO UNLOCK YOUR CITY
          </div>
          <div class="subtitle is-size-2 is-size-4-tablet is-size-6-mobile">
            reach one crowdfunding goal after antoher to unlock flatrates in
            your city
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
          title: "1. JOIN",
          subtitle: "and signup to the mission",
          icon: "invite"
        },
        {
          title: "2. PRE-BUY",
          subtitle: "early bird flatrates during crowdfunding",
          icon: "win"
        },
        {
          title: "3. REACH",
          subtitle: "one goal after to unlock your city",
          icon: "vote"
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
