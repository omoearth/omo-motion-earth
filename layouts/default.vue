<template>
  <div class="omo-wrapper">
    <header v-show="panelTop.show" class="omo-panel-top">
      <OmoPanelTop />
    </header>
    <div class="omo-content">
      <nav v-show="panelLeft.show" class="omo-panel-left">
        <OmoPanelLeft />
      </nav>
      <main class="omo-main">
        <div class="omo-panel-center">
          <nuxt />
        </div>
        <div v-show="panelSlideUp.show" class="omo-panel-slide-up">
          <OmoPanelSlideUp />
        </div>
      </main>
      <aside v-show="panelRight.show" class="omo-panel-right">
        <OmoPanelRight />
      </aside>
    </div>
    <footer v-show="panelBottom.show" class="omo-panel-bottom">
      <OmoPanelBottom />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters } from "vuex";

import OmoPanelLeft from "@/layouts/OmoPanelLeft.vue";
import OmoPanelTop from "@/layouts/OmoPanelTop.vue";
import OmoPanelRight from "@/layouts/OmoPanelRight.vue";
import OmoPanelSlideUp from "@/layouts/OmoPanelSlideUp.vue";
import OmoPanelBottom from "@/layouts/OmoPanelBottom.vue";

@Component({
  components: {
    OmoPanelLeft,
    OmoPanelTop,
    OmoPanelRight,
    OmoPanelSlideUp,
    OmoPanelBottom
  },
  computed: {
    ...mapGetters({
      panelLeft: "omoLayout/getOmoPanelLeft",
      panelRight: "omoLayout/getOmoPanelRight",
      panelTop: "omoLayout/getOmoPanelTop",
      panelBottom: "omoLayout/getOmoPanelBottom",
      panelSlideUp: "omoLayout/getOmoPanelSlideUp"
    })
  }
})
export default class Layout extends Vue {}
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

.is-fullheight {
  min-height: 100% !important;
}
</style>

<style style lang="scss" scoped>
.omo-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omo-content {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.omo-main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omo-panel-center {
  overflow-y: auto;
  height: 100%;
}
.omo-panel-left {
  overflow: auto;
  overflow-x: hidden;
  border-right: 6px solid #ebeff5;
  height: 100%;
  width: 300px;
}
.omo-panel-right {
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
  border-left: 6px solid #ebeff5;
}
.omo-panel-slide-up {
  height: 100%;
  width: 100%;
}
.omo-panel-top {
  flex: 0;
}
.omo-panel-bottom {
  flex: 0;
}
</style>
