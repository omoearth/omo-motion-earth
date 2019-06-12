<template>
  <div>
    <component :is="getActionComponent" class="component"/>
    <div class="foot">
      <div class="left">
        <div class="buttons">
          <button class="button" @click="showNav">MENU</button>
        </div>
      </div>
      <div class="center">
        <div class="buttons is-centered">
          <!-- <nuxt-link
            v-for="action of this.$store.state.actions"
            :key="action.name"
            class="button"
            :class="action.color"
            :to="action.link || '/'"
          >{{ action.name || "{ name }" }}</nuxt-link>-->
          <button class="button" @click="showActions">Show Actions</button>
        </div>
      </div>
      <div class="right">
        <div class="buttons is-right">
          <div class="button" @click="showAside">BUY</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoUserLoginWithPassword from "@/components/actions/OmoUserLoginWithPassword.vue";
import { mapGetters, mapMutations } from "vuex";

@Component({
  components: { OmoUserLoginWithPassword },
  computed: {
    ...mapGetters(["getActionComponent"])
  },
  methods: {
    showNav() {
      this.$store.commit("showNav");
    },
    showActions() {
      this.$store.commit("showActions");
    },
    showAside() {
      this.$store.commit("showAside");
    }
    // toggleLogin() {
    //   this.$store.commit("setActionComponent", "OmoUserLoginWithPassword");
    // }
  }
})
export default class OmoFooter extends Vue {}
</script>

<style lang="scss" scoped>
.component {
  padding: 3rem;
}
.foot {
  border-top: solid 1px lightgray;
  padding: 0;
  display: flex;
}
.center {
  flex-grow: 1;
}
.buttons {
  padding: 0.6rem;
}
</style>
