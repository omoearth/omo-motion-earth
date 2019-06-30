<template>
  <div>
    <OmoProfile />
    {{ email }}
    <OmoVoucher />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoProfile from "@/components/OmoProfile.vue";
import OmoVoucher from "@/components/OmoVoucher.vue";

import { mapGetters, mapMutations } from "vuex";
const jwt = require("jsonwebtoken");

@Component({
  components: { OmoProfile, OmoVoucher },
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...mapGetters({
      getAuth: "omoAuth/getAuth"
    })
  },
  mounted() {
    var decoded = jwt.verify(
      this.getAuth.accessToken,
      "aodsiguzhasiodfhaslfalskfhladshfölasdkfjnöoasdfjöoasdhjfölasdhf"
    );
    alert(JSON.stringify(decoded));
    // // const crypto = require("crypto");

    // // This method signs an email, using your global 'secretKey'
    // function signEmail(email) {
    //   return crypto
    //     .createHmac("sha256", process.env.CRISP_KEY)
    //     .update(email)
    //     .digest("hex");
    // }

    // console.log("signature is:", signEmail(email));

    // $crisp.push(["set", "user:email", ["samuelandert@me.com", signature]]);
    // $crisp.push(["set", "user:nickname", ["Samuel"]]);
    // $crisp.push(["set", "session:data", [[["city", "Munich"]]]]);
    // $crisp.push(["set", "session:data", [[["flatrate", "eFlat S"]]]]);

    this.setPanelBottom({ show: true });
    this.setPanelTop({ show: false });
    this.setPanelLeft({ show: false });
    this.setPanelRight({ show: false });
    this.setPanelSlideUp({ show: false, component: "OmoActionsInvite" });
    this.setActionButton({ text: "INSPIRE FRIEND" });
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
export default class Profile extends Vue {}
</script>
