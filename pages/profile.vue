<template>
  <div>
    <OmoProfile />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoProfile from "@/components/OmoProfile.vue";
import { mapMutations } from "vuex";

@Component({
  components: { OmoProfile },
  mounted() {
    this.setShowNav(true);
    this.setShowAside(false);
    this.setShowHeader(true);
    this.setShowFooter(true);
    this.setActionComponent("OmoUserInvite");
    this.setNavComponent("OmoMenu");
    // this.setAsideComponent("OmoOffers");
  },
  methods: {
    ...mapMutations([
      "setShowHeader",
      "setShowAside",
      "setShowNav",
      "setShowFooter",
      "setActionComponent",
      "setAsideComponent",
      "setNavComponent"
    ])
  },
  middleware: ["authentication"]
})
export default class Profile extends Vue {}
</script>
