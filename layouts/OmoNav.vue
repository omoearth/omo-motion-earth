<template>
  <div style="padding: 1rem">
    <component :is="getNavComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoMenu from "@/components/OmoMenu.vue";
import { mapGetters } from "vuex";

@Component({
  components: { OmoMenu },
  computed: {
    ...mapGetters(["getNavComponent"])
  }
})
export default class OmoNav extends Vue {}
</script>
