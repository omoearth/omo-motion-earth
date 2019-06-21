<template>
  <div>
    <OmoWelcome />
    <OmoIllustration />
    <OmoVimeo />
    <OmoExplain />
    <OmoVehicles />
    <OmoCities />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoWelcome from "@/components/OmoWelcome.vue";
import OmoIllustration from "@/components/OmoIllustration.vue";
import OmoVimeo from "@/components/OmoVimeo.vue";
import OmoVehicles from "@/components/OmoVehicles.vue";
import OmoExplain from "@/components/OmoExplain.vue";
import OmoCities from "@/components/OmoCities.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    OmoWelcome,
    OmoIllustration,
    OmoVimeo,
    OmoExplain,
    OmoVehicles,
    OmoCities
  },
  created() {
    this.setOmoContext({
      show: false
    });
    this.setOmoActions({
      show: false,
      component: "OmoUserLoginWithEmailLink",
      button: "VOTE NOW"
    });
  },
  methods: {
    ...mapMutations(["setOmoContext", "setOmoActions"])
  },
  middleware: ["authentication"]
})
export default class Start extends Vue {}
</script>
