export default () => {
  // window.$crisp = [];
  // window.CRISP_WEBSITE_ID = "8dab5823-ddb8-4366-a622-e8b338caff67";
  // (function() {
  //   var d = document;
  //   var s = d.createElement("script");
  //   s.src = "https://client.crisp.chat/l.js";
  //   s.async = 1;
  //   d.getElementsByTagName("head")[0].appendChild(s);
  // })();
  !(function (m, a, i, t, r, e) {
    if (m.RH) return;
    (r = m.RH = {}),
    (r.uuid = t),
    (r.loaded = 0),
    (r.base_url = i),
    (r.queue = []),
    (m.rht = function () {
      r.queue.push(arguments);
    });
    (e = a.getElementsByTagName("script")[0]),
    (c = a.createElement("script"));
    (c.async = !0),
    (c.src = i + "/widget/" + t + ".js"),
    e.parentNode.insertBefore(c, e);
  })(window, document, "https://app.referralhero.com", "MF1d8d003bf4");
};
