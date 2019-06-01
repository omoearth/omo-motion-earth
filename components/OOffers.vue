<template>
  <section class="section">
    <ApolloQuery :query="require('../apollo/queries/offers.gql')" :variables="{ }">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured {{ error }}</div>

        <div v-else-if="data" class="result apollo">
          <div class="columns is-multiline">
            <div v-for="offer in data.offers" :key="offer.id" class="column is-one-quarter">
              <!-- <OCity :city="city"/> -->
              <div class="card">
                <div class="card-image has-text-centered">
                  <figure class="image">
                    <img :src="buildImageUrl(offer.image)" :alt="offer.name">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="subtitle is-size-4">{{ offer.name }}</p>
                      <p class="title is-4">
                        {{ offer.price }}{{ offer.priceCurrency }} * / day **
                        <span>
                          <p class="is-size-6">VAT incl.</p>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="is-size-5">{{ offer.description }}</div>
                  <div>{{ offer.availabilityStarts }}</div>
                  <br>
                  INTERESTED: {{offer.count}}
                </div>

                <footer class="card-footer">
                  <div class="card-footer-item has-background-primary is-fullwidth">
                    <ApolloMutation
                      :variables="{offerId:offer.id}"
                      :mutation="require('../apollo/mutation/buyOffer.gql')"
                      @done="onDone"
                    >
                      <template slot-scope="{ mutate, loading, error }" class="is-fullwidth">
                        <div
                          :disabled="loading"
                          class="button is-primary is-medium not-rounded"
                          @click="mutate()"
                        >I WANT THIS</div>
                        <p v-if="error">An error occured: {{ error }}</p>
                      </template>
                    </ApolloMutation>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
      <ApolloSubscribeToMore
        :document="require('../apollo/subscriptions/offerChanged.gql')"
        :update-query="onOfferChanged"
      />
    </ApolloQuery>

    <!-- <div class="container">
      <div class="columns pricing-table is-multiline">
        <div v-for="offer in offers" :key="offer.id" class="column is-3"></div>
      </div>
      <section>
        *estimated future pricing, could be subject to change
        <br>**monthly payment
      </section>
    </div>-->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Toast } from "buefy/dist/components/toast";

@Component({
  data() {
    return {};
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/vehicles/` + name + `.png`);
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
      Toast.open("Offer saved");
      this.$router.push({
        path: "/registerUser"
      });
    }
  }
})
export default class Products extends Vue {}
</script>

<style lang="scss" scoped>
.not-rounded {
  border-radius: 0;
}
</style>
