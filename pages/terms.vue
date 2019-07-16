<template>
  <div class="section container">
    Terms of Service
    <br />By signing up for our motion.earth vision, you accept our
    <a href="privacy">Privacy Policy</a> and agree not to: Use our service to
    send spam or scam users. We reserve the right to update these Terms of
    Service later. Citizens of EU countries and the United Kingdom must be at
    least 16 years old to sign up.
    <br />
    <p>The referral campaign</p>
    <br />
    <p>
      This website and its content is currently just a first vision and a tool
      to bring the citizens of the world together to build new cooperations. At
      the point of time, on 16.07.2019, when this campaign website was launched,
      we don't know yet when, how, where and even if our vision is going to be
      developed. We behold the right to take down any or all campaign materials
      without any further notice and do
      <b>NOT</b> promise any delivery of intended services. The referral
      greenfluencer rewards will only be taken in consideration after a
      successful crowdfunding, for which there will be separate terms of
      services before we launch the crowdfunding campaign.
    </p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
// import OmoTerms from "@/components/OmoTerms.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    // OmoTerms
  },
  mounted() {
    this.setPanelBottom({ show: false });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false });
    // this.setActionButton({ text: "VOTE NOW" });
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
  }
})
export default class Terms extends Vue {}
</script>

<style lang="scss" scoped>
a {
  color: blue;
}
</style>
