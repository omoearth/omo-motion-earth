<template>
  <h1
    class="has-background-light has-text-dark has-text-centered is-size-6 title"
    style="padding: 0.4rem 0"
  >
    PROFILE
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "o-header"
})
export default class OHeader extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 1px solid lightgrey;
}
</style>
