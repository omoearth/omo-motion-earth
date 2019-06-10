<template>
  <div class="container section">
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            INSPIRE FRIEND
          </h1>
          <h1 class="subtitle">
            to win the greencity race
          </h1>
        </div>
      </div>
    </div>

    <ApolloMutation
      :mutation="require('../apollo/mutation/inviteFriend.gql')"
      :variables="{name: name, email: email, city: city}"
    >
      <div class="field">
        <div class="control">
          <input v-model="name" class="input is-large" type="text" placeholder="name">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="city" class="input is-large" type="text" placeholder="city">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input v-model="email" class="input is-large" type="email" placeholder="email">
        </div>
      </div>
      <template v-slot="{ mutate, loading, error }">
        <button class="button is-primary is-medium" :disabled="loading" @click="mutate()">
          SEND INVITE
        </button>
        <p v-if="error">
          An error occurred: {{ error }}
        </p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      city: '',
      email: ''
    }
  }
}
</script>
