<template>
  <div class="is-fullheight">
    <OmoHome />
    <OmoVision />
    <OmoVimeo />
    <OmoFlatrates />
    <OmoJoin />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoHome from "@/components/OmoHome.vue";
import OmoVimeo from "@/components/OmoVimeo.vue";
import OmoVision from "@/components/OmoVision.vue";
import OmoJoin from "@/components/OmoJoin.vue";
import OmoFlatrates from "@/components/OmoFlatrates.vue";

import gql from "graphql-tag";
import { mapMutations } from "vuex";
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  components: {
    OmoHome,
    OmoVimeo,
    OmoVision,
    OmoJoin,
    OmoFlatrates
  },
  mounted() {
    this.setPanelBottom({ show: true });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false });
    // this.setActionButton({ text: "LOGIN" });
  },
  methods: {
    ...mapMutations({
      setPanelLeft: "omoLayout/setOmoPanelLeft",
      setPanelRight: "omoLayout/setOmoPanelRight",
      setPanelTop: "omoLayout/setOmoPanelTop",
      setPanelBottom: "omoLayout/setOmoPanelBottom",
      setPanelSlideUp: "omoLayout/setOmoPanelSlideUp",
      setActionButton: "omoLayout/setOmoActionButton"
    })
  },
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

<style lang="scss" scoped>
.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
