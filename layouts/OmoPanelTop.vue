<template>
  <div>
    <div :is="panelTop.component"></div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters } from "vuex";

@Component({
  components: {},
  computed: {
    ...mapGetters({
      panelTop: "omoLayout/getOmoPanelTop"
    })
  }
})
export default class OmoPanelTop extends Vue {}
</script>

<style lang="scss" scoped>
.omo-header {
  background: #ebeff5;
}
</style>
