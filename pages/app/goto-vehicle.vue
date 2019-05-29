<template>
  <div>
    <OMapBox :props="props"/>
    <div class="fixed-to-bottom">
      <input class="input is-medium" type="text" placeholder="Enter Goal">
      <br>
      <br>
      <div class="columns is-mobile">
        <div class="column">
          <nuxt-link
            class="button is-primary is-medium is-fullwidth"
            to="/app/start-vehicle"
          >START NEW JOURNEY</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OMapBox from "~/components/OMapBox";

export default {
  data() {
    return {
      props: {
        zoom: 12,
        location: null,
        center: [11.576124, 48.137154]
      },
      vehicles: [
        {
          id: 1,
          type: "minicar",
          remaining_distance: 21,
          lat: 48.133572,
          lng: 11.581969
        },
        {
          id: 2,
          type: "pedelec",
          remaining_distance: 9,
          lat: 48.15034,
          lng: 11.59602
        },
        {
          id: 3,
          type: "pedelec",
          remaining_distance: 12,
          lat: 48.15034,
          lng: 11.59602
        },
        {
          id: 4,
          type: "minicar",
          remaining_distance: 45,
          lat: 48.118511,
          lng: 11.567345
        },
        {
          id: 5,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.11997,
          lng: 11.511351
        },
        {
          id: 6,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.124501,
          lng: 11.542274
        },
        {
          id: 7,
          type: "mincar",
          remaining_distance: 45,
          lat: 48.156683,
          lng: 11.58888
        },
        {
          id: 8,
          type: "minicar",
          remaining_distance: 45,
          lat: 48.173786,
          lng: 11.561777
        },
        {
          id: 9,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.179649,
          lng: 11.497985
        },
        {
          id: 10,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.083811,
          lng: 11.513848
        },
        {
          id: 11,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.090979,
          lng: 11.57239
        },
        {
          id: 12,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.070461,
          lng: 11.531489
        },
        {
          id: 13,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.080078,
          lng: 11.667117
        },
        {
          id: 14,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.108454,
          lng: 11.732158
        },
        {
          id: 15,
          type: "miniscooter",
          remaining_distance: 45,
          lat: 48.112596,
          lng: 11.684432
        },
        {
          id: 16,
          type: "pedelec",
          remaining_distance: 45,
          lat: 48.146821,
          lng: 11.723908
        },
        {
          id: 17,
          type: "scooter",
          remaining_distance: 45,
          lat: 48.174935,
          lng: 11.632218
        },
        {
          id: 18,
          type: "scooter",
          remaining_distance: 45,
          lat: 48.136383,
          lng: 11.562921
        },
        {
          id: 19,
          type: "scooter",
          remaining_distance: 45,
          lat: 48.158902,
          lng: 11.510128
        }
      ]
    };
  },
  components: {
    OMapBox
  }
};
</script>

<style>
.fixed-to-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2rem 2.5rem;
  background-color: #fafafa;
}
</style>
