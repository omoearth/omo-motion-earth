<template>
  <div class="omo-context-slot">
    <OmoMenu />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoMenu from "@/components/OmoMenu.vue";

@Component({
  components: {
    OmoMenu
  }
})
export default class OmoContext extends Vue {}
</script>

<style lang="scss" scoped>
.omo-context-slot {
  height: 100%;
  background: #fafcff;
}
</style>
