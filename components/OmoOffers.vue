<template>
  <no-ssr>
    <ApolloQuery :query="require('../apollo/queries/offers.gql')" :variables="{ category }">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured {{ error }}</div>

        <div v-else-if="data" class="result apollo">
          <div class="columns is-multiline is-mobile">
            <div
              v-for="offer in data.offers"
              :key="offer.id"
              class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
            >
              <div class="card">
                <div :v-if="data.image" class="card-image has-text-centered">
                  <figure class="image">
                    <img :src="buildImageUrl(offer.image)" :alt="offer.name">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p
                        class="subtitle is-size-6-mobile is-size-5-tablet is-size-4"
                      >{{ offer.name }}</p>
                      <p
                        class="title is-size-6-mobile is-size-5-tablet is-4-dekstop"
                      >{{ offer.price }}{{ offer.priceCurrency }} / month</p>
                    </div>
                  </div>

                  <!-- <div
                    class="is-size-7-mobile is-size-6-tablet is-size-5-desktop"
                  >
                    incl. {{ offer.description }}
                  </div>-->
                  <!-- <div>{{ offer.availabilityStarts }}</div> -->

                  <!-- <div class="has-text-weight-bold">{{ offer.count }} Favorite</div> -->
                </div>
                <!-- <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    <ApolloMutation
                      :variables="{ offerId: offer.id }"
                      :mutation="require('../apollo/mutation/buyOffer.gql')"
                      @done="onDone"
                    >
                      <template
                        slot-scope="{ mutate, loading, error }"
                        class="is-fullwidth"
                      >
                        <div :disabled="loading" @click="mutate()">
                          Select {{ offer.name }}
                        </div>
                        <p v-if="error">An error occured: {{ error }}</p>
                      </template>
                    </ApolloMutation>
                  </a>
                </footer>-->
              </div>
            </div>
          </div>
        </div>
      </template>
      <ApolloSubscribeToMore
        :document="require('../apollo/subscriptions/offerChanged.gql')"
        :update-query="onOfferChanged"
      />
    </ApolloQuery>
  </no-ssr>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Toast } from "buefy/dist/components/toast";

@Component({
  data() {
    return {
      category: "mobility"
    };
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/products/` + name + `.svg`);
    },
    onOfferChanged(previousResult, { subscriptionData }) {
      // The previous result is immutable
      const newResult = {
        offers: [...previousResult.offers]
      };
      // Add the question to the list
      const replace = newResult.offers.find(
        x => x.id === subscriptionData.data.offer.id
      );
      const index = newResult.offers.indexOf(replace);
      newResult.offers[index] = subscriptionData.data.offer;

      return newResult;
    },
    onDone: function() {
      Toast.open({
        duration: 5000,
        message: `Great choice. We will do our best to bring the eFlat to your city`,
        position: "is-top",
        type: "is-primary"
      });
    }
  }
})
export default class OmoOffers extends Vue {}
</script>

<style lang="scss" scoped>
.omo-offers {
  width: 500px;
  padding: 2rem;
}
</style>
