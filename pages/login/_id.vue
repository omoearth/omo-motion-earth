<template>
  <div>you will be logged in soon</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
const Cookie = process.client ? require("js-cookie") : undefined;
import { mapMutations } from "vuex";

@Component({
  components: {},
  methods: {
    ...mapMutations({
      setAuth: "omoAuth/setAuth"
    })
  },
  created() {
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
          alert(JSON.stringify(result));
          if (result.data.loginWithMail.token) {
            const auth = {
              accessToken: result.data.loginWithMail.token
            };

            alert(this.setAuth);

            this.setAuth(auth);
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
