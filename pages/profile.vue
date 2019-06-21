<template>
  <div>
    <OmoCities />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoCities from "@/components/OmoCities.vue";

import { mapMutations } from "vuex";

@Component({
  components: { OmoCities },
  created() {
    this.setOmoContext({
      show: true
    });
    this.setOmoActions({
      show: false,
      component: "OmoActionPanelInvite",
      button: "INVITE FRIEND"
    });
  },
  methods: {
    ...mapMutations(["setOmoContext", "setOmoActions"])
  },
  middleware: ["authentication"]
})
export default class Profile extends Vue {}
</script>
