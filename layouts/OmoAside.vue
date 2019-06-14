<template>
  <div style="padding: 1.2rem">
    <component :is="getAsideComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters } from "vuex";

@Component({
  components: {},
  computed: {
    ...mapGetters(["getAsideComponent"])
  }
})
export default class OmoAside extends Vue {}
</script>
