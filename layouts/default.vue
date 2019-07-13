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
    <script>
      !(function(m, a, i, t, r, e) {
        if (m.RH) return;
        (r = m.RH = {}),
          (r.uuid = t),
          (r.loaded = 0),
          (r.base_url = i),
          (r.queue = []),
          (m.rht = function() {
            r.queue.push(arguments);
          });
        (e = a.getElementsByTagName("script")[0]),
          (c = a.createElement("script"));
        (c.async = !0),
          (c.src = i + "/widget/" + t + ".js"),
          e.parentNode.insertBefore(c, e);
      })(window, document, "https://app.referralhero.com", "MF1d8d003bf4");
    </script>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters, mapMutations } from "vuex";

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
  },
  methods: {
    ...mapMutations({
      setPanelLeft: "omoLayout/setOmoPanelLeft"
    }),
    toggleOmoPanelLeft() {
      this.setPanelLeft({ show: !this.panelLeft.show });
    }
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
  overflow-x: hidden;
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
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;
}
.omo-panel-left {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
.omo-panel-right {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  height: 100%;
  border-left: 2px solid #ebeff5;
  width: 500px;
}
.omo-panel-slide-up {
  // width: 100%;
  // height: 100%;
  // position: absolute;
  // z-index: 1002;
}
.omo-panel-top {
  flex: 0;
}
.omo-panel-bottom {
  flex: 0;
}

@media only screen and (max-width: 600px) {
  .omo-panel-right {
    background: #f5f7fa;
    position: absolute;
    top: 0;
    bottom: 4rem;
    right: 0;
    width: 100%;
    z-index: 500;
  }
}
</style>
