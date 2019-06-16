<template>
  <ApolloMutation
    :mutation="require('@/apollo/mutation/sendLoginLink.gql')"
    :variables="{ identifier: email }"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="field is-fullwidth">
        <div class="control is-fullwidth">
          <input v-model="email" class="input is-medium" type="email" placeholder="email">
        </div>
        <button
          class="button is-primary is-fullwidth"
          :disabled="loading"
          @click="mutate()"
        >Send login link</button>
      </div>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return { email: "" };
  }
})
export default class OmoUserLoginWithEmailLink extends Vue {}
</script>
