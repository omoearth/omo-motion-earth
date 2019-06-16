<template>
  <div class="omo-footer-slot">
    <OmoNavBar />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

import OmoNavBar from "@/components/OmoNavBar.vue";

@Component({
  components: {
    OmoNavBar
  }
})
export default class OmoFooterSlot extends Vue {}
</script>
