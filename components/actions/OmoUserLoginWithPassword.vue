<template>
  <ApolloMutation
    :mutation="require('@/apollo/mutation/loginUser.gql')"
    :variables="{ identifier: email, password: password }"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control is-expanded">
          <input
            v-model="email"
            class="input is-medium"
            type="email"
            placeholder="email"
          />
        </div>
        <div class="control is-expanded">
          <input
            v-model="password"
            class="input is-medium"
            type="password"
            placeholder="password"
          />
        </div>
        <button
          class="button is-medium is-primary"
          :disabled="loading"
          @click="mutate()"
        >
          Login
        </button>
        <p v-if="error">An error occurred: {{ error }}</p>
      </div>
    </template>
  </ApolloMutation>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  data() {
    return {
      email: "",
      password: ""
    };
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
export default class OmoUserLoginWithPassword extends Vue {}
</script>
