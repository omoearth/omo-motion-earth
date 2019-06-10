<template>
  <div>
    <OStart :start="start" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OStart from '@/components/OStart.vue'
import gql from 'graphql-tag'
const Cookie = process.client ? require('js-cookie') : undefined

@Component({
  components: {
    OStart
  },
  head() {
    return { title: 'FOOBAR' }
  },
  data() {
    return {
      start: {
        data: {
          title: 'THE POWER OF MOVEMENT'
        }
      }
    }
  },
  created() {
    this.$store.commit('setActions', [
      {
        name: 'login',
        link: '/profile',
        color: 'is-primary'
      }
    ])
    this.$store.commit('setHeader', [
      {
        title: 'juhuuu'
      }
    ])
    if (this.$route.params.id) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation signInOrSignUp($id: String!) {
              signInOrSignUp(invitationId: $id) {
                token
                user {
                  identifier
                  password
                  name
                  claims
                }
              }
            }
          `,
          // Parameters
          variables: {
            id: this.$route.params.id
          }
        })
        .then((result) => {
          if (result.data.signInOrSignUp.token) {
            const auth = {
              accessToken: result.data.signInOrSignUp.token
            }
            this.$store.commit('setAuth', auth)
            Cookie.set('auth', auth)
            this.$router.push({
              path: '/invite'
            })
          }
        })
    }
  }
})
export default class Index extends Vue {}
</script>
