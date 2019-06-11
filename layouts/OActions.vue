<template>
  <div style="padding: 1rem">
    <OUserLogin />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OUserLogin from "~/components/OUserLogin.vue";

@Component({
  name: "o-actions",
  components: {
    OUserLogin
  }
})
export default class OActions extends Vue {}
</script>
