<template>
  <main class="omo-wrapper">
    <header class="omo-title">
      <OHeader />
    </header>
    <main class="omo-main">
      <div class="omo-content">
        <ONav class="omo-nav" />
        <nuxt class="omo-overview" />
      </div>
    </main>
    <footer class="omo-footer">
      <OFooter />
    </footer>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OFooter from "@/layouts/OFooter.vue";
import OHeader from "@/layouts/OHeader.vue";
import ONav from "@/layouts/ONav.vue";

@Component({
  components: { OFooter, OHeader, ONav }
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

<style lang="scss" scoped>
.omo-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omo-main {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: block;
  position: relative;
}
.omo-content {
  display: flex;
}
.omo-nav {
}
.omo-overview {
  height: 100%;
}

.omo-header,
.omo-footer {
  flex: 0;
}
</style>
