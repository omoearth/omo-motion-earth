<template>
  <div>
    <OmoWelcome />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <OmoIllustration />
        </div>
      </div>
    </section>
    <OmoVimeo />
    <OmoExplain />
    <OmoOperator />
    <OmoVehicles />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoWelcome from "@/components/OmoWelcome.vue";
import OmoIllustration from "@/components/OmoIllustration.vue";
import OmoVimeo from "@/components/OmoVimeo.vue";
import OmoVehicles from "@/components/OmoVehicles.vue";
import OmoOperator from "@/components/OmoOperator.vue";
import OmoExplain from "@/components/OmoExplain.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    OmoWelcome,
    OmoIllustration,
    OmoVimeo,
    OmoExplain,
    OmoOperator,
    OmoVehicles
  },
  mounted() {
    this.setPanelBottom({ show: true });
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
