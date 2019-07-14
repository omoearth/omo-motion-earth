<template>
  <div>imprint</div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
// import OmoImprint from "@/components/OmoImprint.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    // OmoImprint
  },
  mounted() {
    this.setPanelBottom({ show: false });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false });
    // this.setActionButton({ text: "VOTE NOW" });
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
})
export default class Terms extends Vue {}
</script>
