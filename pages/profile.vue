<template>
  <OCityRanking />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OCityRanking from "@/components/OCityRanking.vue";

@Component({
  components: { OCityRanking },
  middleware: ["authentication"]
})
export default class Profile extends Vue {}
</script>
