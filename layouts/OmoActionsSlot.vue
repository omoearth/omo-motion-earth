<template>
  <div>
    <div v-for="comp in omoComponents" :key="comp.id">
      <div
        :is="comp.slot"
        v-show="comp.show"
        v-if="comp.name == 'OmoActionsSlot'"
        class="omo-actions-slot"
      ></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { getOmoComponents } from "@/apollo/clientCache/queries";

import OmoUserInvite from "@/components/actions/OmoUserInvite.vue";
import OmoUserLoginWithPassword from "@/components/actions/OmoUserLoginWithPassword.vue";

@Component({
  components: {
    OmoUserInvite,
    OmoUserLoginWithPassword
  },
  apollo: {
    omoComponents: {
      query: getOmoComponents
    }
  }
})
export default class OmoActionsSlot extends Vue {}
</script>

<style lang="scss" scoped>
.omo-actions-slot {
  background: #ebeff5;
  padding: 2rem;
}
</style>
