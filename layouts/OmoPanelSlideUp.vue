<template>
  <div class="omo-actions-slot">
    <div :is="panelSlideUp.component"></div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoActionsLogin from "@/components/OmoActionsLogin.vue";

import { mapGetters } from "vuex";

@Component({
  components: {
    OmoActionsLogin
  },
  computed: {
    ...mapGetters({
      panelSlideUp: "omoLayout/getOmoPanelSlideUp"
    })
  }
})
export default class OmoPanelSlideUp extends Vue {}
</script>

<style lang="scss" scoped>
.omo-actions-slot {
  width: 100%;
  height: 100%;
}
</style>
