<template>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title is-size-1 is-size-3-mobile is-uppercase">
          Inspire Friend
        </div>
        <div class="subtitle is-size-4 is-size-6-mobile">
          and greenfluence together your city
        </div>
        <div class="columns">
          <OmoUserInvite class="column is-half-tablet is-offset-3-tablet" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoUserInvite from "@/components/actions/OmoUserInvite.vue";

@Component({
  components: { OmoUserInvite }
})
export default class OmoActionsInvite extends Vue {}
</script>
