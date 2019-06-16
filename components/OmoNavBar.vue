<template>
  <div class="omo-nav-bar">
    <div class="left">
      <div class="buttons">
        <div class="button">MENU</div>
      </div>
    </div>
    <div class="center">
      <div class="buttons is-centered">
        <div class="button is-primary">CALL TO ACTION</div>
      </div>
    </div>
    <div class="right">
      <div class="buttons is-right">
        <div class="button">DETAIL</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoNavBar extends Vue {}
</script>

<style lang="scss" scoped>
.omo-nav-bar {
  background: #ebeff5;
  padding: 0;
  display: flex;
}
.center {
  flex-grow: 1;
}
.buttons {
  padding: 0.5rem;
}
</style>
