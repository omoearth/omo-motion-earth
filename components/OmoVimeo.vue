<template>
  <div class="container">
    <div class="vimeo">
      <iframe
        src="https://player.vimeo.com/video/341061641?autoplay=1&background=1"
        frameborder="0"
        webkitAllowFullScreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoVimeo extends Vue {}
</script>

<style lang="scss" scoped>
.vimeo {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}
.vimeo iframe,
.vimeo object,
.vimeo embed {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
