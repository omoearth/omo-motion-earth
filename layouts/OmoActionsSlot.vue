<template>
  <div>
    <OmoUserLoginWithPassword />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import OmoUserLoginWithPassword from "@/components/actions/OmoUserLoginWithPassword.vue";

@Component({
  components: {
    OmoUserLoginWithPassword
  }
})
export default class OmoActionsSlot extends Vue {}
</script>

<style lang="scss" scoped>
.omo-actions-slot {
  background: #ebeff5;
  padding: 2rem;
}
</style>
