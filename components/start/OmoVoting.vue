<template>
  <div style="padding: 2rem 5rem">
    <div class="columns">
      <div v-for="item in items" :key="item.icon" class="column">
        <img :src="buildImageUrl(item.icon)" style="padding: 2rem 6rem">
        <h1 class="title is-4">{{ item.title }}</h1>
        <h2 class="subtitle is-5">{{ item.subtitle }}</h2>
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
          title: "1. VOTE",
          subtitle: "for your city",
          icon: "vote"
        },
        {
          title: "2. GREENFLUENCE",
          subtitle: "your city",
          icon: "invite"
        },
        {
          title: "3. WIN",
          subtitle: "the green race",
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
export default class OmoWelcome extends Vue {}
</script>
