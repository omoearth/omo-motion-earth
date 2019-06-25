<template>
  <ApolloMutation
    :mutation="require('@/apollo/mutation/inviteFriend.gql')"
    :variables="{ name: name, email: email, city: city }"
  >
    <div class="field">
      <div class="control">
        <input
          v-model="name"
          class="input is-size-5-mobile is-size-4-tablet is-size-3-desktop is-rounded"
          type="text"
          placeholder="first name"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input
          v-model="city"
          class="input is-size-5-mobile is-size-4-tablet is-size-3-desktop is-rounded"
          type="text"
          placeholder="city"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input
          v-model="email"
          class="input is-size-5-mobile is-size-4-tablet is-size-3-desktop is-rounded"
          type="email"
          placeholder="email"
        />
      </div>
    </div>
    <br />
    <template v-slot="{ mutate, loading, error }">
      <button
        class="button is-dark is-rounded is-fullwidth"
        :disabled="loading"
        @click="mutate()"
      >
        SEND INVITATION
      </button>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return {
      email: "",
      name: "",
      city: ""
    };
  }
})
export default class OmoUserInvite extends Vue {}
</script>
