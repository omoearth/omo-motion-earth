<template>
  <section class="o-user-login">
    <div>
      <div class="field">
        <div class="control">
          <!-- <input class="input is-large" type="text" placeholder="email"> -->
          <ApolloMutation
            :mutation="require('../apollo/mutation/loginUser.gql')"
            :variables="{email:'admin@omo.earth', password:'omoearth'}"
            :update="updateAuth"
          >
            <template v-slot="{ mutate, loading, error }">
              <button class="button is-primary" :disabled="loading" @click="mutate()">
                login ME
              </button>
              <p v-if="error">
                An error occurred: {{ error }}
              </p>
            </template>
          </ApolloMutation>
        </div>
      </div>
    </div>
  </section>
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
