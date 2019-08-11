<template>
  <div>
    <div class="hero is-medium is-light">
      <div class="section is-medium has-text-centered">
        <div
          class="title is-size-1 is-size-1-tablet is-size-4-mobile"
          style="padding-bottom: 1rem"
        >
          OUR MISSION
        </div>
        <div
          class="subtitle has-text-weight-medium is-size-2 is-size-4-tablet is-size-6-mobile has-text-dark"
        >
          enjoy the freedom to access, drive and leave any green sharing vehicle
          from any place in the world
        </div>
      </div>
    </div>
    <div class="section">
      <div class="columns is-centered">
        <div class="column">
          <img src="/iphone.png" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoService extends Vue {}
</script>
