<template>
  <div>
    <div class="hero is-medium">
      <div class="hero-body">
        <div class="has-text-centered">
          <div
            class="title is-size-1 is-size-1-tablet is-size-4-mobile"
            style="padding-bottom: 1rem"
          >OUR VISION</div>
          <img src="/banner.png" style="padding: 2rem" />
          <div
            class="subtitle has-text-weight-medium is-size-1 is-size-3-tablet is-size-5-mobile has-text-dark"
          >leading earth into a new era of 100% sustainable sharing mobility</div>
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
