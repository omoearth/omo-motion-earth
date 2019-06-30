<template>
  <div>
    <div class="section has-background-light is-medium">
      <div class="container has-text-centered">
        <div
          class="title is-size-1 is-size-2-tablet is-size-4-mobile is-uppercase"
        >
          Start earning
        </div>
        <div
          class="subtitle is-size-3 is-size-4-tablet is-size-6-mobile has-text-dark"
        >
          by sharing green vehicles and become an independent clean mobility
          provider for your hometown
        </div>
      </div>
      <div class="is-horizontal-centered has-text-centered">
        <div class="section subtitle is-size-1 is-large">
          placeholder illustration
        </div>
        <!-- <img src="/iphone.png"> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoVehicles extends Vue {}
</script>

<style lang="scss" scoped>
.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
