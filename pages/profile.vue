<template>
  <div>
    <OProfile />
  </div>
</template>

<script>
import OProfile from "@/components/OProfile.vue";

export default {
  components: {
    OProfile
  },
  created() {
    this.$store.commit("setActions", [
      {
        name: "create new invite",
        link: "/inviteFriend",
        color: "is-primary"
      }
    ]);
  },
  middleware: ["authentication"]
};
</script>
