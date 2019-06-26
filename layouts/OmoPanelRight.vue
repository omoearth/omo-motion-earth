<template>
  <div class="is-fullheight">
    <div :is="panelRight.component"></div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoMessages from "@/components/OmoMessages.vue";
import { mapGetters } from "vuex";

@Component({
  components: { OmoMessages },
  computed: {
    ...mapGetters({
      panelRight: "omoLayout/getOmoPanelRight"
    })
  }
})
export default class OmoPanelRight extends Vue {}
</script>
