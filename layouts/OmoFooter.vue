<template>
  <div>
    <div class="foot">
      <div class="left">
        <div class="buttons">
          <button class="button is-dark" @click="setShowNav(!getShowNav)">
            MENU
          </button>
        </div>
      </div>
      <div class="center">
        <div class="buttons is-centered">
          <nuxt-link
            v-for="action of getActions"
            :key="action.name"
            class="button"
            :class="action.color"
            :to="action.link"
            >{{ action.name || "{ name }" }}</nuxt-link
          >

          <!-- <button class="button is-primary" @click="setShowActions(!getShowActions)">INVITE FRIEND</button> -->
        </div>
      </div>
      <!-- <div class="right">
        <div class="buttons is-right">
          <div class="button is-dark" @click="setShowAside(!getShowAside)">ASIDE</div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { mapGetters, mapMutations } from "vuex";

@Component({
  computed: {
    ...mapGetters([
      "getActionComponent",
      "getShowAside",
      "getShowActions",
      "getShowHeader",
      "getShowNav",
      "getActions"
    ])
  },
  methods: {
    ...mapMutations([
      "setShowNav",
      "setShowAside",
      "setShowActions",
      "setShowHeader"
    ])
    // toggleLogin() {
    //   this.$store.commit("setActionComponent", "OmoUserLoginWithPassword");
    // }
  }
})
export default class OmoFooter extends Vue {}
</script>

<style lang="scss" scoped>
.foot {
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
