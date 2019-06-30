<template>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title is-size-1 is-size-3-mobile is-uppercase">Login</div>
        <div
          class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile"
        >No account yet? Signup first here</div>
        <div class="columns">
          <!-- <OmoUserLoginWithEmailLink class="column is-half-tablet is-offset-3-tablet"/> -->
          <OmoUserLoginWithPassword class="column is-half-tablet is-offset-3-tablet"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoUserLoginWithEmailLink from "@/components/actions/OmoUserLoginWithEmailLink.vue";
import OmoUserLoginWithPassword from "@/components/actions/OmoUserLoginWithPassword.vue";

@Component({
  components: { OmoUserLoginWithEmailLink, OmoUserLoginWithPassword }
})
export default class OmoActionsLogin extends Vue {}
</script>
