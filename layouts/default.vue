<template>
  <div class="omo-wrapper">
    <header class="omo-header">
      <OmoHeaderSlot/>
    </header>
    <div class="omo-content">
      <nav class="omo-nav">
        <OmoNavSlot/>
      </nav>
      <main class="omo-main">
        <div class="omo-overview">
          <nuxt/>
        </div>
        <div class="omo-actions">
          <OmoActionsSlot/>
        </div>
      </main>
      <!-- <aside class="omo-detail">
        <OmoDetailSlot />
      </aside>-->
    </div>
    <footer class="omo-footer">
      <OmoFooterSlot/>
    </footer>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

// Import Layout Slots
import OmoFooterSlot from "@/layouts/OmoFooterSlot.vue";
import OmoHeaderSlot from "@/layouts/OmoHeaderSlot.vue";
import OmoNavSlot from "@/layouts/OmoNavSlot.vue";
// import OmoDetailSlot from "@/layouts/OmoDetailSlot.vue";
import OmoActionsSlot from "@/layouts/OmoActionsSlot.vue";

@Component({
  components: {
    OmoFooterSlot,
    OmoHeaderSlot,
    OmoNavSlot,
    // OmoDetailSlot,
    OmoActionsSlot
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
.omo-nav {
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
