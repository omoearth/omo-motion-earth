<template>
  <ApolloMutation
    :mutation="require('@/apollo/mutation/signInOrSignUp.gql')"
    :variables="{ email: email }"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="is-fullwidth has-background-light" style="padding: 1rem">
        <div class="columns is-mobile is-gapless">
          <div class="column is-8-mobile is-9-tablet is-10-desktop">
            <div class="field" style="padding: 0">
              <div class="control">
                <input
                  v-model="email"
                  type="email"
                  class="input is-size-5-mobile is-size-4-tablet"
                  placeholder="email"
                />
              </div>
            </div>
          </div>
          <div class="column is-4-mobile is-3-tablet is-2-desktop">
            <div
              class="button is-fullwidth is-size-5-mobile is-size-4-tablet is-primary is-uppercase"
              :disabled="loading"
              @click="mutate()"
            >signup</div>
          </div>
        </div>
      </div>

      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
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
