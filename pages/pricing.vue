<template>
  <div class="section container">
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="title">Our Service</div>
          <div class="subtitle">
            Our anticipated pricing for the future flatrates (may vary in
            different cities)
          </div>
        </div>
      </div>
    </div>
    <OmoOffers />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoOffers from "@/components/OmoOffers.vue";

import { mapMutations } from "vuex";

@Component({
  components: { OmoOffers },
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
  },
  middleware: ["authentication"]
})
export default class Pricing extends Vue {}
</script>
