<template>
  <no-ssr>
    <ApolloQuery
      :query="require('../apollo/queries/offers.gql')"
      :variables="{ category }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">
          An error occured {{ error }}
        </div>

        <div v-else-if="data" class="result apollo">
          <div class="section has-text-centered" style="padding-bottom: 0">
            <div
              class="title is-size-5-mobile is-size-4-tablet is-size-3-desktop"
            >
              LEAD YOUR CITY
            </div>
            <div
              class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
            >
              into a new era of clean and silent sharing mobility and win
              lifelong flatrates*
            </div>
            <div class="is-size-7">
              *our global mobility flatrate is currently a vision. Prices will
              only be activated, when we inspire together your cities mobility
              providers successfully. Only active flatrate accounts from invited
              friends will be counted to enjoy your prices.
            </div>
          </div>
          <div class="section columns is-multiline">
            <div
              v-for="offer in data.offers"
              :key="offer.id"
              class="column is-half-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet"
              style="margin-bottom: 2rem"
            >
              <div class="columns box is-mobile" style="padding: 0">
                <div class="column is-half-third" style="padding: 0 2rem 0 0">
                  <img :src="buildImageUrl(offer.image)" :alt="offer.name" />
                </div>
                <div class="column is-half is-centered">
                  <div>
                    <div
                      class="title is-size-4-desktop is-size-5-tablet is-size-5-mobile"
                    >
                      {{ offer.description }}
                    </div>
                    <div
                      class="subtitle is-size-5-desktop is-size-6-tablet is-size-6-mobile"
                    >
                      INSPIRE {{ offer.name }}
                    </div>
                  </div>
                </div>
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

@Component({
  data() {
    return {
      category: "voucher"
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
      alert("success");
    }
  }
})
export default class OmoVoucher extends Vue {}
</script>

<style lang="scss" scoped>
.is-centered {
  display: flex;
  // justify-content: center;
  align-items: center;
}
</style>
