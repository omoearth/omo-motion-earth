<template>
  <div>
    <OmoProgressBar />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoProgressBar from "@/components/OmoProgressBar.vue";

@Component({
  components: {
    OmoProgressBar
  }
})
export default class OmoHeader extends Vue {}
</script>

<style lang="scss" scoped>
.omo-header-slot {
  border: 6px solid #ebeff5;
}
</style>
