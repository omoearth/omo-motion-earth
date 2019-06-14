<template>
  <iframe
    src="https://player.vimeo.com/video/341061641"
    frameborder="0"
    allowfullscreen
    mozallowfullscreen
    webkitAllowFullScreen
  />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({})
export default class OmoVideo extends Vue {}
</script>

<style lang="scss" scoped>
.o-vimeo {
  position: relative;
  padding-bottom: 56.25%;
  /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.o-vimeo iframe,
.o-vimeo object,
.o-vimeo embed {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 80%;
  height: 80%;
}
</style>
