<template>
  <div class="omo-nav-slot">
    <OmoMenu/>
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
export default class OmoNavSlot extends Vue {}
</script>

<style lang="scss" scoped>
.omo-nav-slot {
  height: 100%;
  background: #fafcff;
}
</style>
