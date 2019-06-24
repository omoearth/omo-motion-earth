<template>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title is-size-1 is-size-3-mobile is-uppercase">
          vote now
        </div>
        <div class="subtitle is-size-4 is-size-6-mobile">
          choose your city and sign up for newsletter
        </div>
        <div class="columns">
          <div class="column is-half-tablet is-offset-3-tablet">
            <OmoCitySelectHome />
            <OmoUserLoginWithEmailLink />
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  I agree to the
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  subscribe to newsletter
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoUserLoginWithEmailLink from "@/components/actions/OmoUserLoginWithEmailLink.vue";
import OmoCitySelectHome from "@/components/actions/OmoCitySelectHome.vue";

@Component({
  components: { OmoUserLoginWithEmailLink, OmoCitySelectHome }
})
export default class OmoActionsRegister extends Vue {}
</script>
