<template>
  <div id="subscribe">
    <script>
  !(function(m, a, i, t, r, e) {
    if (m.RH) return;
    (r = m.RH = {}),
      (r.uuid = t),
      (r.loaded = 0),
      (r.base_url = i),
      (r.queue = []),
      (m.rht = function() {
        r.queue.push(arguments);
      });
    (e = a.getElementsByTagName("script")[0]), (c = a.createElement("script"));
    (c.async = !0),
      (c.src = i + "/widget/" + t + ".js"),
      e.parentNode.insertBefore(c, e);
  })(window, document, "https://app.referralhero.com", "MF1d8d003bf4");
    </script>
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
  padding: 6rem !important;
}
#mtr-sharing-verification-container.maitre-reminder {
  /* padding-left: 1rem !important; */
}
p#mtr-sharing-people-position-text {
  color: black !important;
}

p#mtr-sharing-people-referred-text {
  color: black !important;
}

a#mtr-sharing-verification-resend-email {
  font-weight: 600 !important;
}
#mtr-sharing-verification {
  color: #ffffff !important;
}
#mtr-form-header {
  font-size: 1.4rem;
}

#maitre-floating-button {
  bottom: 2rem !important;
  padding: 0.75rem 2rem !important;
  font-size: 1.2rem !important;
  font-family: "Palanquin Dark", sans-serif;
}
</style>
