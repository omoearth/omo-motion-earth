<template>
  <div
    class="content has-text-white has-text-weight-medium has-background-dark has-text-centered"
  >
    <a href="/">home</a> - <a href="/terms">terms</a> -
    <a href="/imprint">imprint</a>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoFooter extends Vue {}
</script>

<style>
a {
  color: #fff;
  font-size: 0.9rem;
}

a:hover {
  color: #4ac984;
}
</style>
