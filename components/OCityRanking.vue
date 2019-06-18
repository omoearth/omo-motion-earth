<template>
  <div>
    <ApolloQuery :query="require('@/apollo/queries/currentProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">
          An error occured {{ error }}
        </div>

        <div v-else-if="data" class="result apollo">
          <div class="hero is-medium">
            <div class="hero-body background-image has-text-centered">
              <div class="container">
                <h2 class="title has-text-white is-size-giant is-uppercase">
                  {{ data.currentUser.city.votes }}
                </h2>
                <h3 class="title has-text-white is-size-2 is-uppercase">
                  {{ data.currentUser.city.name }}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

    <ApolloQuery
      :query="require('@/apollo/queries/cities.gql')"
      :variables="{}"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">
          An error occured {{ error }}
        </div>

        <div v-else-if="data" class="result apollo">
          <div class="columns is-gapless is-multiline">
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
  </div>
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

<style scoped>
.is-size-giant {
  font-size: 6rem;
}
.round {
  border: 5px solid #fff;
  border-radius: 100%;
  background-color: #fefefe;
}
.sub {
  font-size: 1rem;
  color: lightgrey;
}
.background-image {
  background-image: linear-gradient(
      to bottom,
      rgba(80, 80, 80, 0.3) 0%,
      rgba(82, 82, 82, 0.3) 100%
    ),
    url("/cities/munich2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
