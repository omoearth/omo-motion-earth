<template>
  <div style="padding: 1rem">
    <component :is="getActionComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoUserLoginWithPassword from "@/components/actions/OmoUserLoginWithPassword.vue";
import OmoUserInvite from "@/components/actions/OmoUserInvite.vue";
import { mapGetters } from "vuex";

@Component({
  components: { OmoUserLoginWithPassword, OmoUserInvite },
  computed: {
    ...mapGetters(["getActionComponent"])
  }
})
export default class OmoActions extends Vue {}
</script>
