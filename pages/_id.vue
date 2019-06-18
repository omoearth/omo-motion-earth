<template>
  <OmoHome :home="home" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OmoHome from "@/components/OmoHome.vue";
import gql from "graphql-tag";

// import { mapMutations } from "vuex";
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  components: {
    OmoHome
  },
  data() {
    return {
      home: {
        data: {
          title: "THE POWER OF MOVEMENT"
        }
      }
    };
  },
  // methods: {
  //   ...mapMutations([
  //     "setActionComponent",
  //     "setShowNav",
  //     "setShowActions",
  //     "setShowHeader",
  //     "setShowAside",
  //     "setShowFooter"
  //   ])
  // },
  // mounted() {
  //   this.setActionComponent("OmoUserLoginWithPassword");
  //   this.setShowNav(false);
  //   this.setShowActions(true);
  //   this.setShowHeader(false);
  //   this.setShowAside(false);
  //   this.setShowFooter(false);
  //   // this.$store.commit("setActions", [
  //   //   {
  //   //     name: "ENTER",
  //   //     link: "/profile"
  //   //   }
  //   // ]);
  // },
  created() {
    if (this.$store.state.auth) {
      this.$router.push({
        path: "/profile"
      });
    }
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
        .then(result => {
          if (result.data.signInOrSignUp.token) {
            const auth = {
              accessToken: result.data.signInOrSignUp.token
            };
            this.$store.commit("setAuth", auth);
            Cookie.set("auth", auth);
            this.$router.push({
              path: "/start"
            });
          }
        });
    }
  }
})
export default class Index extends Vue {}
</script>
