<template>
  <div class="omo-nav-bar">
    <div class="left">
      <div class="buttons">
        <div class="button" @click="toggleComponent('OmoNavSlot')">MENU</div>
      </div>
    </div>
    <div class="center">
      <div class="buttons is-centered">
        <div
          class="button is-primary"
          @click="toggleComponent('OmoActionsSlot')"
        >
          CALL TO ACTION
        </div>
      </div>
    </div>
    <div class="right">
      <div class="buttons is-right">
        <div class="button" @click="toggleComponent('OmoDetailSlot')">
          DETAIL
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

import {
  toggleOmoComponents,
  getOmoComponents
} from "@/apollo/clientCache/queries";

@Component({
  apollo: {
    omoComponents: {
      query: getOmoComponents
    }
  },
  methods: {
    toggleComponent(name) {
      this.$apollo.mutate({
        mutation: toggleOmoComponents,
        variables: { name }
      });
    }
  }
})
export default class OmoNavBar extends Vue {}
</script>

<style lang="scss" scoped>
.omo-nav-bar {
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
