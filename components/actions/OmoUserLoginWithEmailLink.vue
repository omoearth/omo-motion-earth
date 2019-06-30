<template>
  <ApolloMutation
    :mutation="require('@/apollo/mutation/signInOrSignUp.gql')"
    :variables="{ email: email }"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="field is-fullwidth">
        <div class="control is-fullwidth">
          <input
            v-model="email"
            class="input is-size-5-mobile is-size-4-tablet is-size-3-desktop is-rounded"
            type="email"
            placeholder="email"
          />
        </div>
        <br />
        <button
          class="button is-dark is-fullwidth is-uppercase is-rounded"
          :disabled="loading"
          @click="mutate()"
        >
          Send login link
        </button>
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
  // middleware: "notAuthenticated",
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
export default class OmoUserLoginWithEmailLink extends Vue {}
</script>
