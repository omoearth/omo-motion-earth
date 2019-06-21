<template>
  <div
    class="title has-text-centered is-size-5 omo-header"
    style="padding: 0.7rem"
  >
    oMotion
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  components: {}
})
export default class OmoHeader extends Vue {}
</script>

<style lang="scss" scoped>
.omo-header {
  background: #ebeff5;
}
</style>
