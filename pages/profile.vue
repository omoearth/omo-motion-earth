<template>
  <OmoProfile />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoProfile from "@/components/OmoProfile.vue";

@Component({
  components: { OmoProfile },
  middleware: ["authentication"]
})
export default class Profile extends Vue {}
</script>
