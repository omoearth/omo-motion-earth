<template>
  <div>
    <OmoProfile/>
    <OmoVoucher/>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoProfile from "@/components/OmoProfile.vue";
import OmoVoucher from "@/components/OmoVoucher.vue";

import { mapMutations } from "vuex";

@Component({
  components: { OmoProfile, OmoVoucher },
  mounted() {
    this.setPanelBottom({ show: true });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false });
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
  },
  middleware: ["authentication"]
})
export default class Profile extends Vue {}
</script>
