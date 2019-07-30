<template>
  <div>
    <div class="hero is-medium">
      <div class="hero-body">
        <div class="section container has-text-centered">
          <!-- <div
            class="title is-size-1 is-size-1-tablet is-size-4-mobile"
            style="padding-bottom: 1rem"
          >OUR VISION</div>-->
          <img src="/banner.png" style="padding: 1rem" />
          <!-- <div class="subtitle is-size-1 is-size-3-tablet is-size-5-mobile">
            imagine travelling the world with ease, jumping on any
            <br />
            <b class="has-text-weight-semibold">e-bike</b>,
            <b class="has-text-weight-semibold">e-scooter</b>,
            <b class="has-text-weight-semibold">e-car</b>,
            <b class="has-text-weight-semibold">e-bus</b> and
            <b class="has-text-weight-semibold">any public transport</b>
            <br />all within
            <b class="has-text-weight-semibold has-text-primary">one</b> green
            <b class="has-text-weight-semibold has-text-primary">flatrate</b>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoVimeo from "@/components/OmoVimeo.vue";

@Component({
  components: { OmoVimeo }
})
export default class OmoVision extends Vue {}
</script>
