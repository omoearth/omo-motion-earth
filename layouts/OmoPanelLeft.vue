<template>
  <div class="is-fullheight has-background-light">
    <div :is="panelLeft.component"></div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoMenu from "@/components/OmoMenu.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    OmoMenu
  },
  computed: {
    ...mapGetters({
      panelLeft: "omoLayout/getOmoPanelLeft"
    })
  }
})
export default class OmoPanelLeft extends Vue {}
</script>
