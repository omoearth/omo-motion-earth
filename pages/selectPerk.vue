<template>
  <div>
    <div class="section container has-text-centered">
      <p class="title has-text-blue is-size-1 is-size-3-mobile">CHOOSE THE SERVICE</p>
      <p class="subtitle is-4 is-size-5-mobile">which you would like to have in your city</p>
    </div>
    <OPerkSelect :perks="perks"/>
  </div>
</template>

<script>
import OPerkSelect from "~/components/OPerkSelect";

export default {
  data() {
    return {
      perks: [
        {
          title: "eFlat XS",
          main: "miniscooter",
          additional: [],
          price: "1€/day",
          btn: {
            text: "I want this",
            link: ""
          },
          detail: {
            text: "more detail",
            link: ""
          }
        },
        {
          title: "eFlat S",
          main: "pedelec",
          additional: ["miniscooter"],
          price: "2€/day",
          btn: {
            text: "I want this",
            link: ""
          },
          detail: {
            text: "more details",
            link: ""
          }
        },
        {
          title: "eFlat M",
          main: "scooter",
          additional: ["miniscooter", "pedelec"],
          price: "3€/day",
          btn: {
            text: "I want this",
            link: ""
          },
          detail: {
            text: "more details",
            link: ""
          }
        },
        {
          title: "eFlat L",
          main: "minicar",
          additional: ["miniscooter", "pedelec", "scooter"],
          price: "5€/day",
          btn: {
            text: "I want this",
            link: ""
          },
          detail: {
            text: "more detail",
            link: ""
          }
        }
      ]
    };
  },
  components: {
    OPerkSelect
  }
};
</script>

