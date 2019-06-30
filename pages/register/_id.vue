<template>
  <div>you will be logged in soon</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  components: {},
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
          console.log(JSON.stringify(result));
          if (result.data.loginWithMail.token) {
            const auth = {
              accessToken: result.data.loginWithMail.token
            };
            this.$store.commit("omoAuth/setAuth", auth);
            Cookie.set("auth", auth);
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
