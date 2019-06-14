<template>
  <div class="omo-wrapper">
    <div class="omo-content">
      <nav v-show="getShowNav" class="omo-nav has-background-light">
        <OmoNav />
      </nav>
      <main class="omo-main">
        <header v-show="getShowHeader" class="omo-header has-background-light">
          <OmoHeader />
        </header>
        <div class="omo-overview">
          <nuxt />
        </div>
        <div class="omo-actions has-background-white-bis">
          <OmoActions v-show="getShowActions" />
        </div>
      </main>
      <aside v-show="getShowAside" class="omo-aside has-background-light">
        <OmoAside />
      </aside>
    </div>
    <footer v-show="getShowFooter" class="omo-footer has-background-black">
      <OmoFooter />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoHeader from "@/layouts/OmoHeader.vue";
import OmoNav from "@/layouts/OmoNav.vue";
import OmoAside from "@/layouts/OmoAside.vue";
import OmoActions from "@/layouts/OmoActions.vue";
import OmoFooter from "@/layouts/OmoFooter.vue";

import { mapGetters } from "vuex";

@Component({
  components: { OmoFooter, OmoHeader, OmoNav, OmoAside, OmoActions },
  computed: {
    ...mapGetters([
      "getShowNav",
      "getShowAside",
      "getShowActions",
      "getShowHeader",
      "getShowFooter"
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
  // border-top: 1px solid lightgrey;
  // border-right: 1px solid lightgrey;
  // border-left: 1px solid lightgrey;
}
.omo-nav {
  overflow: auto;
  width: 250px;
  // border-right: 1px solid lightgrey;
}
.omo-aside {
  overflow: auto;
  width: 400px;
  border-left: 1px solid lightgrey;
}
.omo-actions {
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  z-index: 100;
}
.omo-header {
  flex: 0;
}
.omo-footer {
  flex: 0;
}
</style>
