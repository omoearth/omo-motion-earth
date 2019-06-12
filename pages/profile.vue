<template>
  <div>
    <OProfile/>
  </div>
</template>

<script>
import OProfile from "@/components/OProfile.vue";

export default {
  components: {
    OProfile
  },
  created() {
    this.$store.commit("setActionComponent", "");
    // this.$store.commit("setActions", [
    //   {
    //     name: "create new invite",
    //     link: "/inviteFriend",
    //     color: "is-primary"
    //   },
    //   {
    //     name: "test",
    //     link: "profile",
    //     click: "toggleComp()"
    //   }
    // ]);
  },
  beforeDestroy() {
    this.$store.commit("setActionComponent", "");
  },
  middleware: ["authentication"]
};
</script>
