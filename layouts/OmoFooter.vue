<template>
  <div class="omo-foot">
    <div class="left">
      <div class="buttons">
        <div class="button" @click="toggleProfile()">Profile</div>
      </div>
    </div>
    <div class="center">
      <div class="buttons is-centered">
        <div class="button is-primary">CALL TO ACTION</div>
      </div>
    </div>
    <div class="right">
      <div class="buttons is-right">
        <div class="button">DETAIL</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters, mapMutations } from "vuex";

@Component({
  computed: { ...mapGetters(["getOmoContext"]) },
  methods: {
    ...mapMutations(["setOmoContext"]),
    toggleProfile() {
      this.setOmoContext({ show: !this.getOmoContext.show });
      // this.setOmoOverview({ show: !this.getOmoOverview.show });
    }
  }
})
export default class OmoFooter extends Vue {}
</script>

<style lang="scss" scoped>
.omo-foot {
  background: #ebeff5;
  padding: 0;
  display: flex;
}
.center {
  flex-grow: 1;
}
.buttons {
  padding: 0.5rem;
}
</style>
