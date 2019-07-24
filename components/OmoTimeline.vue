<template>
  <div>
    <div class="section hero is-medium has-text-centered is-light">
      <div
        class="title is-size-1 is-size-1-tablet is-size-4-mobile"
        style="padding-bottom: 1rem"
      >
        OUR TIMELINE
      </div>
      <div
        class="subtitle has-text-weight-medium is-size-2 is-size-4-tablet is-size-6-mobile has-text-dark"
      >
        inspire - crowdfund - unlock
      </div>
    </div>
    <section class="section container">
      <img src="/timeline.png" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoTimeline extends Vue {}
</script>
