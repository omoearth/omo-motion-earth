<template>
  <div>
    <div class="hero is-medium">
      <div class="hero-body">
        <div class="has-text-centered">
          <!-- <div
            class="title is-size-1 is-size-1-tablet is-size-4-mobile"
            style="padding-bottom: 1rem"
          >OUR VISION</div>-->
          <img src="/banner.png" style="padding: 1rem" />
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
