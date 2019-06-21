<template>
  <ApolloMutation
    :mutation="require('@/apollo/mutation/sendLoginLink.gql')"
    :variables="{ identifier: email }"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="field is-fullwidth">
        <div class="control is-fullwidth">
          <input
            v-model="email"
            class="input is-large is-rounded"
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
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  data() {
    return { email: "" };
  },
  middleware: "notAuthenticated",
  methods: {
    updateAuth: function(store, { data }) {
      const auth = {
        accessToken: data.login.token
      };
      this.$store.commit("setAuth", auth);
      Cookie.set("auth", auth);
      this.$router.push({ path: "/profile" });
    }
  }
})
export default class OmoUserLoginWithEmailLink extends Vue {}
</script>
