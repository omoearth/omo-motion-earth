<template>
  <div>
    <OStart :start="start" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OStart from '@/components/OStart.vue'
import gql from 'graphql-tag'

@Component({
  components: {
    OStart
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
  methods: {},
  created() {
    if (this.$route.params.id) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation login($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
                claims
              }
            }
          `,
          // Parameters
          variables: {
            email: 'admin@omo.earth',
            password: 'omoearth'
          }
        })
        .then((x) => {
          console.log(x)
          this.$router.push({
            path: '/invite'
          })
        })
    }
  },

  mounted() {
    console.log(this.$route.params.id)
  }
})
export default class Index extends Vue {}
</script>
