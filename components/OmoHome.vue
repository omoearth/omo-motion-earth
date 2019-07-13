<template>
  <div class="hero is-medium">
    <div class="hero-body hero-image">
      <div class="container has-text-centered">
        <div class="columns is-mobile">
          <div
            class="column is-two-thirds-mobile is-offset-2-mobile is-half-tablet is-offset-3-tablet is-one-third-desktop is-offset-4-desktop"
          >
            <img src="/brand.png" width="100%" />
          </div>
        </div>

        <!-- <h1 class="title has-text-white">THE Vision</h1> -->

        <div
          class="subtitle is-size-2 is-size-4-tablet is-size-6-mobile has-text-white"
        >
          jump on every
          <b class="has-text-weight-semibold">e-bike</b>,
          <b class="has-text-weight-semibold">e-scooter</b>,
          <b class="has-text-weight-semibold">e-car</b> and
          <b class="has-text-weight-semibold">any public transport</b> all
          within <b class="has-text-weight-semibold">one app</b> and green
          <b class="has-text-weight-semibold">flatrate</b>
        </div>
        <!-- <a href="#video" class="button is-primary is-large">
          PLAY
          <span style="padding-left: 1rem;">
            <omo-icon :icon="['fas', 'play']" :style="{ color: 'white' }" />
          </span>
        </a>-->
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
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
