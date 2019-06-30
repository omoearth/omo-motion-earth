<template>
  <div class="hero is-fullheight">
    <div class="hero-body hero-image">
      <div class="container has-text-centered">
        <div class="columns is-mobile">
          <div
            class="column is-two-thirds-mobile is-offset-2-mobile is-half-tablet is-offset-3-tablet is-one-third-desktop is-offset-4-desktop"
          >
            <img src="/brand.png" width="100%" />
          </div>
        </div>
        <h2
          class="subtitle is-size-1 is-size-2-tablet is-size-3-mobile has-text-light"
        >
          THE POWER OF MOVEMENT
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  props: ["home"]
})
export default class OmoHome extends Vue {}
</script>

<style lang="scss" scoped>
.hero-image {
  background: linear-gradient(
      to bottom,
      rgba(80, 80, 80, 0.3) 0%,
      rgba(82, 82, 82, 0.3) 100%
    ),
    url(/road.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.is-size-special {
  font-size: 4rem;
}
</style>
