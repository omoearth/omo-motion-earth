<template>
  <div>
    <div class="section container has-text-centered is-medium">
      <div class="title is-uppercase is-size-2 is-size-4-mobile">GREENFLUENCE</div>
      <div
        class="subtitle is-size-3 is-size-6-mobile"
      >your hometown to become the global leader of smart and clean movement</div>
      <br>
      <div class="columns is-mobile">
        <div v-for="item in items" :key="item.icon" class="column is-one-third">
          <img :src="buildImageUrl(item.icon)">
          <h1 class="title is-size-3 is-size-6-mobile">{{ item.title }}</h1>
          <h2 class="subtitle is-size-4 is-size-7-mobile">{{ item.subtitle }}</h2>
        </div>
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
          subtitle: "collect votes for your city",
          icon: "vote"
        },
        {
          title: "2. UNLOCK",
          subtitle: "unlock flatrate vouchers",
          icon: "win"
        },
        {
          title: "3. INSPIRE",
          subtitle: "local mobility entrepreneurs",
          icon: "invite"
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
export default class OmoExplain extends Vue {}
</script>
