<template>
  <div class="hero is-medium">
    <div class="hero-body hero-image">
      <div class="container has-text-centered">
        <h1
          class="section title is-uppercase is-size-1 is-size-2-tablet is-size-3-mobile has-text-white"
          style="padding: 2.5rem 0"
        >imagine the exciting freedom</h1>

        <div class="subtitle is-size-2 is-size-4-tablet is-size-6-mobile has-text-white">
          of travelling the world with ease,
          jumping on any
          <br />
          <b class="has-text-weight-semibold">e-bike</b>,
          <b class="has-text-weight-semibold">e-scooter</b>,
          <b class="has-text-weight-semibold">e-car</b>,
          <b class="has-text-weight-semibold">e-bus</b> and
          <b class="has-text-weight-semibold">any public transport</b>
          <br />all within
          <b class="has-text-weight-semibold">one</b> app and green
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
