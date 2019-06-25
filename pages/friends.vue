<template>
  <div>friends here</div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoCities from "@/components/OmoCities.vue";

import { mapMutations } from "vuex";

@Component({
  components: { OmoCities },
  mounted() {
    this.setPanelBottom({ show: true });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false, component: "OmoActionsInvite" });
    this.setActionButton({ text: "INSPIRE FRIEND" });
  },
  methods: {
    ...mapMutations({
      setPanelLeft: "omoLayout/setOmoPanelLeft",
      setPanelRight: "omoLayout/setOmoPanelRight",
      setPanelTop: "omoLayout/setOmoPanelTop",
      setPanelBottom: "omoLayout/setOmoPanelBottom",
      setPanelSlideUp: "omoLayout/setOmoPanelSlideUp",
      setActionButton: "omoLayout/setOmoActionButton"
    })
  }
  //   middleware: ["authentication"]
})
export default class Friends extends Vue {}
</script>
