<template>
  <div class="container section">
    <h1>Site Notice</h1>
    <br />
    <h2>Information pursuant to § 5 TMG</h2>
    <br />
    <p>
      Samuel Andert
      <br />Adlzreiterstr. 24
      <br />80337 München
    </p>
    <br />
    <h2>Contact</h2>
    <br />
    <p>
      Phone: +49 (0) 152 53586734
      <br />E-mail: team@motion.earth
    </p>
    <br />
    <h3>Liability for Contents</h3>
    <br />
    <p>
      As service providers, we are liable for own contents of these websites
      according to Paragraph 7, Sect. 1 German Telemedia Act (TMG). However,
      according to Paragraphs 8 to 10 German Telemedia Act (TMG), service
      providers are not obligated to permanently monitor submitted or stored
      information or to search for evidences that indicate illegal activities.
    </p>
    <br />
    <p>
      Legal obligations to removing information or to blocking the use of
      information remain unchallenged. In this case, liability is only possible
      at the time of knowledge about a specific violation of law. Illegal
      contents will be removed immediately at the time we get knowledge of them.
    </p>
    <br />
    <h3>Liability for Links</h3>
    <br />
    <p>
      Our offer includes links to external third party websites. We have no
      influence on the contents of those websites, therefore we cannot guarantee
      for those contents. Providers or administrators of linked websites are
      always responsible for their own contents.
    </p>
    <br />
    <p>
      The linked websites had been checked for possible violations of law at the
      time of the establishment of the link. Illegal contents were not detected
      at the time of the linking. A permanent monitoring of the contents of
      linked websites cannot be imposed without reasonable indications that
      there has been a violation of law. Illegal links will be removed
      immediately at the time we get knowledge of them.
    </p>
    <br />
    <h3>Copyright</h3>
    <br />
    <p>
      Contents and compilations published on these websites by the providers are
      subject to German copyright laws. Reproduction, editing, distribution as
      well as the use of any kind outside the scope of the copyright law require
      a written permission of the author or originator. Downloads and copies of
      these websites are permitted for private use only.
      <br />The commercial use of our contents without permission of the
      originator is prohibited.
    </p>
    <br />
    <p>
      Copyright laws of third parties are respected as long as the contents on
      these websites do not originate from the provider. Contributions of third
      parties on this site are indicated as such. However, if you notice any
      violations of copyright law, please inform us. Such contents will be
      removed immediately.
    </p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
// import OmoImprint from "@/components/OmoImprint.vue";

import { mapMutations } from "vuex";

@Component({
  components: {
    // OmoImprint
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
