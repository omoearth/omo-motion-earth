<template>
  <div class="has-text-centered title">
    <div class="progress">
      <div class="step invited has-text-white is-size-5" style>20</div>
      <div class="step has-text-white is-size-5">40</div>
      <div class="step has-text-white is-size-5">60</div>
      <div class="step has-text-white is-size-5">80</div>
      <div class="step has-text-white is-size-5">100</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoProgresBar extends Vue {}
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  width: 100%;
  height: 28px;
  overflow: hidden;
  justify-content: space-between;
  text-align: center;
}
.progress .step {
  flex-grow: 1;
  background: #cbefdb;
}
.progress .step.activated {
  background: #43d889;
}
.progress .step.invited {
  background: #89d9ae;
}
</style>
