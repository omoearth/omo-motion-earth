<template>
  <div>
    <!-- <ApolloMutation
    :mutation="require('@/apollo/mutation/signInOrSignUp.gql')"
    :variables="{ email: email }"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="is-fullwidth has-background-light" style="padding:0.8rem">
        <div class="columns is-gapless">
          <div class="column is-12-mobile is-9-tablet is-10-desktop">
            <div class="field" style="padding: 0">
              <div class="control">
                <input
                  v-model="email"
                  type="email"
                  class="input is-size-6-mobile is-size-5-tablet"
                  placeholder="email"
                />
              </div>
            </div>
          </div>
          <div class="column is-12-mobile is-3-tablet is-2-desktop">
            <div
              class="button is-fullwidth is-size-6-mobile is-size-5-tablet is-primary is-uppercase"
              :disabled="loading"
              @click="mutate()"
            >
              SUBSCRIBE
            </div>
          </div>
        </div>
      </div>

      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
    </ApolloMutation>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Toast } from "buefy/dist/components/toast";

@Component({
  data() {
    return { email: "" };
  },
  methods: {
    updateAuth: function(store, { data }) {
      data = data.signInOrSignUp;
      Toast.open({
        duration: 5000,
        message: JSON.stringify(data.message),
        position: "is-top",
        type: "is-primary"
      });
    }
  }
})
export default class OmoActionsLogin extends Vue {}
</script>
