<template>
  <div class="aside">Aside</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoAside extends Vue {}
</script>

<style lang="scss" scoped>
.aside {
  padding: 1rem 3rem 1rem 1rem;
}
</style>
