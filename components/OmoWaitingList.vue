<template>
  <div id="subscribe" class="section is-medium has-text-centered">
    <div
      class="title is-size-1 is-size-1-tablet is-size-4-mobile"
      style="padding-bottom: 1rem"
    >YOUR MISSION</div>
    <div
      class="subtitle has-text-weight-medium is-size-2 is-size-4-tablet is-size-6-mobile has-text-dark"
    >inspire 1.000.000 greenfluencer to bring motion.earth to life</div>
    <div id="maitre-widget" style="padding-top: 3rem"></div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoWaitingList extends Vue {}
</script>

<style>
input {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
textarea {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
#mtr-popup-container {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
}
#mtr-sharing-verification-container {
  background: #f8a471 !important;
  padding: 12rem !important;
}
#mtr-sharing-verification-container.maitre-reminder {
  /* padding-left: 1rem !important; */
}
a#mtr-sharing-verification-resend-email {
  font-weight: 600 !important;
}
#mtr-sharing-verification {
  color: #ffffff !important;
}
</style>
