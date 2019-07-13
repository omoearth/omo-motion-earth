<template>
  <div class="is-fullheight">
    <OmoShare />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoShare from "@/components/OmoShare.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    OmoShare
  },

  mounted() {
    this.setPanelBottom({ show: false });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false });
    this.setActionButton({ text: "VOTE NOW" });
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
export default class Start extends Vue {}
</script>
