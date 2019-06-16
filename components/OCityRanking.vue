<template>
  <ApolloQuery :query="require('../apollo/queries/cities.gql')" :variables="{}">
    <template slot-scope="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading apollo">Loading...</div>
      <div v-else-if="error" class="error apollo">
        An error occured {{ error }}
      </div>

      <div v-else-if="data" class="result apollo">
        <div class="columns is-multiline">
          <div
            v-for="city in data.cities"
            :key="city.id"
            class="column is-one-quarter"
          >
            <OCity :city="city" />
          </div>
        </div>
      </div>
      <div v-else class="no-result apollo">No result :(</div>
    </template>
    <ApolloSubscribeToMore
      :document="require('../apollo/subscriptions/cityChanged.gql')"
      :update-query="onCityChanged"
    />
  </ApolloQuery>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OCity from "~/components/OCity.vue";

@Component({
  name: "o-city-ranking",
  components: { OCity },
  methods: {
    onCityChanged(previousResult, { subscriptionData }) {
      // The previous result is immutable
      const newResult = {
        cities: [...previousResult.cities]
      };
      // Add the question to the list
      const replace = newResult.cities.find(
        x => x.id === subscriptionData.data.city.id
      );
      const index = newResult.cities.indexOf(replace);
      newResult.cities[index] = subscriptionData.data.city;

      return newResult;
    }
  }
})
export default class OCityRanking extends Vue {}
</script>
