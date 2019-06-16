<template>
  <div class="omo-footer-slot">
    <div v-for="comp in omoComponents" :key="comp.id">
      <div
        :is="comp.slot"
        v-show="comp.show"
        v-if="comp.name == 'OmoFooterSlot'"
        class="omo-actions-slot"
      ></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { getOmoComponents } from "@/apollo/clientCache/queries";

import OmoNavBar from "@/components/OmoNavBar.vue";

@Component({
  components: {
    OmoNavBar
  },
  apollo: {
    omoComponents: {
      query: getOmoComponents
    }
  }
})
export default class OmoFooterSlot extends Vue {}
</script>
