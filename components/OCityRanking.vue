<template>
  <section class="o-city-ranking">
    <div class="columns is-multiline">
      <ApolloQuery :query="require('../apollo/queries/cities.gql')" :variables="{ }">
        <template slot-scope="{ result: { loading, error, data } }">
          <div v-if="loading" class="loading apollo">Loading...</div>
          <div v-else-if="error" class="error apollo">An error occured</div>
          <div v-else-if="data" class="result apollo">
            <div class="column is-one-quarter" v-for="city in data.cities" :key="city.id">
              <OCity v-bind:city="city"/>
            </div>
          </div>
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
    </div>
  </section>
</template>

<script lang="ts">
// import cities from "~/apollo/queries/cities";
// import citiesSubscription from "~/apollo/subscriptions/cities";
import { Component, Vue } from "vue-property-decorator";
import OCity from "~/components/OCity.vue";

@Component({
  name: "o-city-ranking",
  components: {
    OCity
  },
  props: [],
  data() {
    return {};
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
