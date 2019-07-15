<template>
  <div class="section is-medium">
    <div id="maitre-widget"></div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoWaitingList extends Vue {}
</script>

<style lang="scss" scoped>
#mtr-popup-container {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
}
</style>
