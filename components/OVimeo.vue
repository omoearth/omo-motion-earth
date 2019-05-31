
<template>
  <section class="o-vimeo has-video">
    <iframe
      :src="videoLink"
      frameborder="0"
      allowfullscreen
      mozallowfullscreen
      webkitAllowFullScreen
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "o-vimeo",
  components: {},
  props: ["videoLink"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OVimeo extends Vue {}
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
