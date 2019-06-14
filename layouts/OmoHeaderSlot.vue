<template>
  <div>
    <div v-for="comp in omoComponents" :key="comp.id">
      <div
        :is="comp.slot"
        v-show="comp.show"
        v-if="comp.name == 'OmoHeaderSlot'"
        class="omo-header-slot"
      ></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoProgressBar from "@/components/OmoProgressBar.vue";

import { getOmoComponents } from "@/apollo/clientCache/queries";

@Component({
  components: {
    OmoProgressBar
  },
  apollo: {
    omoComponents: {
      query: getOmoComponents
    }
  }
})
export default class OmoHeaderSlot extends Vue {}
</script>

<style lang="scss" scoped>
.omo-header-slot {
  border: 6px solid #ebeff5;
}
</style>
