<template>
  <ApolloMutation
    :mutation="require('../apollo/mutation/loginUser.gql')"
    :variables="{identifier: email, password: password}"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input v-model="email" class="input" type="email" placeholder="email">
        </div>
        <div class="control is-expanded">
          <input v-model="password" class="input" type="password" placeholder="password">
        </div>

        <button class="button is-primary" :disabled="loading" @click="mutate()">
          LOGIN
        </button>
        <p v-if="error">
          An error occurred: {{ error }}
        </p>
      </div>
    </template>
  </ApolloMutation>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const Cookie = process.client ? require('js-cookie') : undefined

@Component({
  name: 'o-user-login',
  components: {},
  props: [],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {},
  mounted() {},
  middleware: 'notAuthenticated',
  methods: {
    mutate: function () { alert('FOO') },
    updateAuth: function (store, { data }) {
      const auth = {
        accessToken: data.login.token
      }
      this.$store.commit('setAuth', auth)
      Cookie.set('auth', auth)
      this.$router.push({ path: '/profile' })
    }
  }
})
export default class OUserLogin extends Vue {}
</script>
