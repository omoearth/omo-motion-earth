<template>
  <div class="has-text-centered is-size-6 title">
    <div class="progress">
      <div class="step activated has-text-white is-size-4" style>1</div>
      <div class="step activated has-text-white is-size-4">2</div>
      <div class="step invited has-text-white is-size-4">3</div>
      <div class="step invited has-text-white is-size-4">4</div>
      <div class="step invited has-text-white is-size-4">5</div>
      <div class="step invited has-text-white is-size-4">6</div>
      <div class="step invited has-text-white is-size-4">7</div>
      <div class="step has-text-white is-size-4">8</div>
      <div class="step has-text-white is-size-4">9</div>
      <div class="step has-text-white is-size-4">10</div>
    </div>
    <!-- <progress class="progress is-large is-primary" max="100"></progress> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoHeader extends Vue {}
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  width: 100%;
  height: 35px;
  overflow: hidden;
  justify-content: space-between;
  text-align: center;
}

.progress .step {
  flex-grow: 1;
  background: lightgray;
}
.progress .step.activated {
  background: #3fbe79;
}
.progress .step.invited {
  background: #cbefdb;
}
</style>
