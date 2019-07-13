<template>
  <div>
    <div id="maitre-widget"></div>
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
