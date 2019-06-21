<template>
  <div class="omo-foot has-background-dark">
    <div class="left">
      <div v-show="getOmoFooter.left" class="buttons">
        <div class="button" @click="toggleProfile()">Profile</div>
      </div>
    </div>
    <div class="center">
      <div class="buttons is-centered">
        <div
          class="button is-fullwidth is-primary is-rounded"
          @click="toggleActions()"
        >
          {{ getOmoActions.button }}
        </div>
      </div>
    </div>
    <div class="right">
      <div v-show="getOmoFooter.right" class="buttons is-right">
        <div class="button">DETAIL</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters, mapMutations } from "vuex";

@Component({
  computed: {
    ...mapGetters(["getOmoContext", "getOmoActions", "getOmoFooter"])
  },
  methods: {
    ...mapMutations(["setOmoContext", "setOmoActions"]),
    toggleProfile() {
      this.setOmoContext({ show: !this.getOmoContext.show });
      // this.setOmoOverview({ show: !this.getOmoOverview.show });
    },
    toggleActions() {
      this.setOmoActions({
        show: !this.getOmoActions.show,
        component: this.getOmoActions.component,
        button: this.getOmoActions.button
      });
    }
  }
})
export default class OmoFooter extends Vue {}
</script>

<style lang="scss" scoped>
.omo-foot {
  // background: #ebeff5;
  padding: 0;
  display: flex;
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
