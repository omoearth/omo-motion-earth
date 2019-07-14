<template>
  <iframe
    id="video"
    src="https://player.vimeo.com/video/348014872"
    frameborder="0"
    webkitAllowFullScreen
    mozallowfullscreen
    allowfullscreen
    class="vimeo"
  ></iframe>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({})
export default class OmoVimeo extends Vue {}
</script>

<style lang="scss" scoped>
.vimeo {
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 80%;
}
.vimeo iframe,
.vimeo object,
.vimeo embed {
  width: 100%;
  height: 100%;
}
</style>
