<template>
  <ApolloMutation
    :mutation="require('../apollo/mutation/loginUser.gql')"
    :variables="{email:'admin@omo.earth', password:'omoearth'}"
    :update="updateAuth"
  >
    <template v-slot="{ mutate, loading, error }">
      <button class="button is-primary is-medium" :disabled="loading" @click="mutate()">
        TEST LOGIN
      </button>
      <p v-if="error">
        An error occurred: {{ error }}
      </p>
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
    return {}
  },
  computed: {},
  mounted() {},
  middleware: 'notAuthenticated',
  methods: {
    mutate: function () {},
    updateAuth: function (store, { data }) {
      // alert(data.login.token);
      const auth = {
        accessToken: data.login.token
      }
      // console.log(this)
      // let foo = this.apollo.getClient()
      // if (!this.$apolloHelpers) { this.$apolloHelpers = {} }
      // alert(JSON.stringify(foo))
      // this.$apolloHelpers.onLogin(data.login.token)
      this.$store.commit('setAuth', auth)
      Cookie.set('auth', auth)
      this.$router.push({ path: '/profile' })
    }
  }
})
export default class OUserLogin extends Vue {}
</script>
