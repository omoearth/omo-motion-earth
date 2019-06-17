<template>
  <div class="omo-wrapper">
    <header class="omo-header">
      <OmoHeader v-show="getOmoHeader.show"/>
    </header>
    <div class="omo-content">
      <nav class="omo-context">
        <OmoContext v-show="getOmoContext.show"/>
      </nav>
      <main class="omo-main">
        <div class="omo-overview">
          <nuxt/>
        </div>
        <div class="omo-actions">
          <OmoActions v-show="getOmoActions.show"/>
        </div>
      </main>
      <aside class="omo-detail">
        <OmoDetail v-show="getOmoDetail.show"/>
      </aside>
    </div>
    <footer class="omo-footer">
      <OmoFooter v-show="getOmoFooter.show"/>
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
      "getOmoFooter"
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
  overflow: hidden;
  display: flex;
}
.omo-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omo-overview {
  overflow-y: auto;
  flex: 1;
  border-right: 6px solid #ebeff5;
  border-left: 6px solid #ebeff5;
}
.omo-context {
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
}
.omo-detail {
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
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
