<template>
  <div class="omo-detail-slot">
    <div v-for="comp in omoComponents" :key="comp.id">
      <div :is="comp.slot" v-show="comp.show" v-if="comp.name == 'OmoDetailSlot'"></div>
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
export default class OmoDetailSlot extends Vue {}
</script>

<style lang="scss" scoped>
.omo-detail-slot {
}
</style>
