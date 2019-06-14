<template>
  <div>
    <h1 class="title is-size-1">SET HOMETOWN</h1>
    <h2 class="subtitle is-size-3">to collect votes for your city</h2>

    <section class="id-medium">
      <img :src="illustration">
    </section>
    <br>
    <OmoCitySelectHome/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoCitySelectHome from "@/components/actions/OmoCitySelectHome.vue";

@Component({
  components: { OmoCitySelectHome },
  data() {
    return {
      illustration: "/icons/vote.svg"
    };
  }
})
export default class OmoVote extends Vue {}
</script>
