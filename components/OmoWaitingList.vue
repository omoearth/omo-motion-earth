<template>
  <div id="subscribe" class="section is-medium">
    <div id="maitre-widget"></div>
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
