<template>
  <div class="omo-actions-slot">
    <div :is="getOmoActions.component"></div>
    <!-- <OmoUserLoginWithPassword/> -->
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoActionPanelLogin from "@/components/OmoActionPanelLogin.vue";
import OmoActionPanelInvite from "@/components/OmoActionPanelInvite.vue";

import { mapGetters } from "vuex";

@Component({
  components: {
    OmoActionPanelInvite,
    OmoActionPanelLogin
  },
  computed: {
    ...mapGetters(["getOmoActions"])
  }
})
export default class OmoActions extends Vue {}
</script>

<style lang="scss" scoped>
.omo-actions-slot {
  width: 100%;
  height: 100%;
}
</style>
