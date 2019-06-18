<template>
  <div class="omo-wrapper">
    <div class="omo-content">
      <nav v-show="getOmoContext.show" class="omo-context">
        <OmoContext />
      </nav>
      <main class="omo-main">
        <header v-show="getOmoHeader.show" class="omo-header">
          <OmoHeader />
        </header>
        <div v-show="getOmoOverview.show" class="omo-overview">
          <nuxt />
        </div>
        <div v-show="getOmoActions.show" class="omo-actions">
          <OmoActions />
        </div>
      </main>
      <aside v-show="getOmoDetail.show" class="omo-detail">
        <OmoDetail />
      </aside>
    </div>
    <footer v-show="getOmoFooter.show" class="omo-footer">
      <OmoFooter />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters } from "vuex";

import OmoContext from "@/layouts/OmoContext.vue";
import OmoHeader from "@/layouts/OmoHeader.vue";
import OmoDetail from "@/layouts/OmoDetail.vue";
import OmoActions from "@/layouts/OmoActions.vue";
import OmoFooter from "@/layouts/OmoFooter.vue";

@Component({
  components: {
    OmoContext,
    OmoHeader,
    OmoDetail,
    OmoActions,
    OmoFooter
  },
  computed: {
    ...mapGetters([
      "getOmoContext",
      "getOmoHeader",
      "getOmoDetail",
      "getOmoActions",
      "getOmoFooter",
      "getOmoOverview"
    ])
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
.omo-overview {
  overflow-y: auto;
}
.omo-context {
  overflow: auto;
  overflow-x: hidden;
  border-right: 6px solid #ebeff5;
  height: 100%;
  width: 300px;
}
.omo-detail {
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
  border-left: 6px solid #ebeff5;
}
.omo-actions {
  z-index: 100;
}
.omo-header {
  flex: 0;
}
.omo-footer {
  flex: 0;
}
</style>
