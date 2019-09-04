<template>
  <div>
    {{ getUser.identifier }}
    <!-- <OmoProfile />-->
    <OmoVoucher />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoProfile from "@/components/OmoProfile.vue";
import OmoVoucher from "@/components/OmoVoucher.vue";

import { mapGetters, mapMutations } from "vuex";

@Component({
  components: { OmoProfile, OmoVoucher },
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...mapGetters({
      getUser: "getUser"
    })
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

  mounted() {
    this.setPanelBottom({ show: true });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false, component: "OmoActionsLogin" });
    this.setActionButton({ text: "INSPIRE FRIEND" });
  }
})
export default class Profile extends Vue {}
</script>
