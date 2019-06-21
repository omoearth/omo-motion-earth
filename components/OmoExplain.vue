<template>
  <div>
    <div class="section container has-text-centered is-medium">
      <div class="title is-uppercase is-size-2 is-size-4-mobile">
        THE GREEN CITY RACE
      </div>
      <div class="subtitle is-size-3 is-size-6-mobile">
        greenfluence your city to become the global leader of clean
        transportation
      </div>
      <div class="columns is-mobile">
        <div v-for="item in items" :key="item.icon" class="column is-one-third">
          <img :src="buildImageUrl(item.icon)" />
          <h1 class="title is-size-3 is-size-6-mobile">{{ item.title }}</h1>
          <h2 class="subtitle is-size-4 is-size-7-mobile">
            {{ item.subtitle }}
          </h2>
        </div>
      </div>
    </div>
    <div class="hero is-primary has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div class="title is-size-2 is-size-4-mobile is-uppercase">
            TOP 100 GREENFLUENCER
          </div>
          <div class="subtitle is-size-3 is-size-5-mobile">
            of each city will drive for free
          </div>
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
          subtitle: "collect 10.000 votes for your city",
          icon: "vote"
        },
        {
          title: "2. UNLOCK",
          subtitle: "unlock the pre-order of flatrates",
          icon: "win"
        },
        {
          title: "3. GREENFLUENCE",
          subtitle: "together we connect the providers",
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
