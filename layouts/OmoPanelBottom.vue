<template>
  <div class="omo-bottom has-background-dark">
    <div class="columns is-mobile is-gapless">
      <div class="column">
        <div class="buttons">
          <!-- <div
            v-if="$store.state.user && !panelSlideUp.show"
            class="button is-dark"
            style="z-index: 1001;"
            @click="toggleOmoPanelLeft()"
          >
            <omo-icon :icon="['fas', 'bars']" :style="{ color: 'white' }" />
          </div>
          <div
            v-if="panelSlideUp.show"
            class="button is-dark"
            style="z-index: 1003;"
            @click="toggleOmoPanelSlideUp()"
          >
            <omo-icon
              :icon="['fas', 'angle-down']"
              :style="{ color: 'white' }"
            />
          </div>-->
        </div>
      </div>
      <div class="column is-8-mobile is-8-tablet is-half-desktop">
        <div class="buttons is-centered">
          <!-- <div
            class="button is-light is-uppercase"
            style="z-index: 100;"
            @click="toggleOmoPanelSlideUp()"
          >
            {{ actionButton.text }}
          </div>-->

          <router-link
            class="button is-primary is-size-7-mobile is-size-6-tablet is-size-5-desktop is-rounded is-fullwidth"
            to="#subcribe"
            @click.native="scrollFix('#subscribe')"
          >GREENFLUENCE NOW</router-link>
        </div>
      </div>
      <div class="column">
        <div class="buttons is-right">
          <!-- <div class="button is-dark" style="z-index: 1003;" @click="toggleOmoPanelRight()">
            <omo-icon :icon="['fas', 'comments']" :style="{ color: 'white' }"/>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters, mapMutations } from "vuex";

const TIMEOUT = 1;

@Component({
  mounted() {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT);
    }
  },
  computed: {
    ...mapGetters({
      panelLeft: "omoLayout/getOmoPanelLeft",
      panelRight: "omoLayout/getOmoPanelRight",
      panelSlideUp: "omoLayout/getOmoPanelSlideUp",
      actionButton: "omoLayout/getOmoActionButton"
    })
  },
  methods: {
    ...mapMutations({
      setPanelLeft: "omoLayout/setOmoPanelLeft",
      setPanelSlideUp: "omoLayout/setOmoPanelSlideUp",
      setPanelRight: "omoLayout/setOmoPanelRight"
    }),
    toggleOmoPanelSlideUp() {
      this.setPanelSlideUp({ show: !this.panelSlideUp.show });
    },
    toggleOmoPanelLeft() {
      this.setPanelLeft({ show: !this.panelLeft.show });
    },
    toggleOmoPanelRight() {
      this.setPanelRight({ show: !this.panelRight.show });
    },
    scrollFix: function(hashtag) {
      setTimeout(() => {
        location.href = hashtag;
      }, TIMEOUT);
    }
  }
})
export default class OmoPanelBottom extends Vue {}
</script>

<style lang="scss" scoped>
.omo-bottom {
  padding: 0;
}
.center {
  flex-grow: 1;
}
.buttons {
  padding: 0.8rem;
}
.left {
  width: 6.5rem;
}
.right {
  width: 6.5rem;
}
</style>
