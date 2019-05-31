<template>
  <section class="o-city-ranking">
    <div class="columns is-multiline">
      <!-- <div class="column is-one-quarter" v-for="city in cities" :key="city.id">
      <OCity v-bind:city="city" />
      </div>-->
    </div>
  </section>
</template>

<script lang="ts">
// import cities from "~/apollo/queries/cities";
// import citiesSubscription from "~/apollo/subscriptions/cities";
import { Component, Vue } from 'vue-property-decorator'
import OCity from '~/components/OCity.vue'

@Component({
  name: 'o-city-ranking',
  components: {
    OCity
  },
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
  // apollo: {
  //   cities: {
  //     prefetch: true,
  //     query: cities,
  //     subscribeToMore: {
  //       document: citiesSubscription,
  //       // Variables passed to the subscription. Since we're using a function,
  //       // they are reactive
  //       variables() {
  //         return {
  //           param: this.param
  //         };
  //       },
  //       // Mutate the previous result
  //       updateQuery: (previousResult, { subscriptionData }) => {
  //         return subscriptionData.data;
  //         // Here, return the new result from the previous with the new data
  //       }
  //     }
  //   }
  // }
})
export default class OCityRanking extends Vue {}
</script>
