<template>
  <div>
    <OmoWelcome />
    <OmoIllustration />
    <OmoVimeo />
    <OmoExplain />
    <OmoVehicles />
    <!-- <OmoTimeline/> -->
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoWelcome from "@/components/OmoWelcome.vue";
import OmoIllustration from "@/components/OmoIllustration.vue";
import OmoVimeo from "@/components/OmoVimeo.vue";
import OmoVehicles from "@/components/OmoVehicles.vue";
import OmoTimeline from "@/components/OmoTimeline.vue";
import OmoExplain from "@/components/OmoExplain.vue";
import OmoUserLoginWithEmailLink from "@/components/actions/OmoUserLoginWithEmailLink.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    OmoWelcome,
    OmoIllustration,
    OmoVimeo,
    OmoVehicles,
    OmoTimeline,
    OmoExplain,
    OmoUserLoginWithEmailLink
  },
  created() {
    this.setOmoContext({
      show: false
    });
  },
  methods: {
    ...mapMutations(["setOmoContext"])
  },
  middleware: ["authentication"]
})
export default class Start extends Vue {}
</script>
