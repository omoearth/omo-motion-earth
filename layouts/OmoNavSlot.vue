<template>
  <div class="omo-nav-slot">
    <div v-for="comp in omoComponents" :key="comp.id">
      <div :is="comp.slot" v-show="comp.show" v-if="comp.name == 'OmoNavSlot'"></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoMenu from "@/components/OmoMenu.vue";

import { getOmoComponents } from "@/apollo/clientCache/queries";

@Component({
  components: {
    OmoMenu
  },
  apollo: {
    omoComponents: {
      query: getOmoComponents
    }
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
