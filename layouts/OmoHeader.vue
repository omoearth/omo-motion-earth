<template>
  <h1 class="has-text-centered is-size-6 title">title</h1>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoHeader extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  padding: 0.4rem 0;
}
</style>
