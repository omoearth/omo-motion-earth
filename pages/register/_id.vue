<template>
  <div>you will be logged in soon</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import { mapMutations } from "vuex";

@Component({
  components: {},
  methods: {
    ...mapMutations({
      setToken: "setToken"
    })
  },
  created() {
    console.log(this.$route.params.id);
    if (this.$route.params.id) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation loginWithMail($id: String!) {
              loginWithMail(emailLoginId: $id) {
                token
              }
            }
          `,
          // Parameters
          variables: {
            id: this.$route.params.id
          }
        })
        .then(result => {
          if (result.data.loginWithMail.token) {
            const auth = {
              accessToken: result.data.loginWithMail.token
            };
            this.$store.commit("setToken", auth);
            this.$router.push({
              path: "/profile"
            });
          } else {
            this.$router.push({
              path: "/"
            });
          }
        });
    }
  }
})
export default class Index extends Vue {}
</script>
