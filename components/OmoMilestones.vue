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
          <div class="hero is-medium is-light">
            <div class="hero-body">
              <div class="has-text-centered">
                <div
                  class="title is-size-1 is-size-1-tablet is-size-4-mobile"
                  style="padding-bottom: 1rem"
                >
                  UNLOCK MILESTONES
                </div>
                <div
                  class="subtitle has-text-weight-medium is-size-2 is-size-4-tablet is-size-6-mobile has-text-dark"
                >
                  unlock from vision to hyperloop one milestone after another
                  and save yourself attractive early visionary subscriber
                  vouchers*
                </div>
                <p class="is-size-7">
                  *only one signup for each person is allowed and will be
                  counted. Vouchers will only be activated if subscriber is
                  fully identified upon start of platform and mobility providers
                  are successfully joining the vision.
                </p>
              </div>
            </div>
          </div>
          <div class="section columns has-text-centered is-multiline">
            <div
              v-for="(offer, index) in data.offers"
              :key="offer.id"
              class="column is-half-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet"
              style="margin-bottom: 2rem; padding: 0"
            >
              <div>
                <!-- <div class="has-text-centered title">
                  <div class="progress">
                    <div
                      class="step subscribed has-text-white is-size-5"
                    >{{offer.votesNeeded / 10 *2}}</div>
                    <div
                      class="step subscribed has-text-white is-size-5"
                    >{{offer.votesNeeded / 10 *4}}</div>
                    <div class="step has-text-white is-size-5">{{offer.votesNeeded / 10 *6}}</div>
                    <div class="step has-text-white is-size-5">{{offer.votesNeeded / 10 *8}}</div>
                    <div class="step has-text-white is-size-5">{{offer.votesNeeded}}</div>
                  </div>
                </div>-->
                <div class="has-background-dark" style="padding: 2rem">
                  <div
                    class="title has-text-white is-size-1-desktop is-size-2-tablet is-size-3-mobile is-uppercase"
                  >
                    {{ offer.votesNeeded }}<br />
                    <span class="is-size-5">subscribers</span>
                  </div>
                  <div
                    class="title has-text-white is-size-3-desktop is-size-4-tablet is-size-5-mobile"
                  >
                    {{ offer.name }}
                  </div>
                  <div
                    class="subtitle has-text-white is-size-4-desktop is-size-5-tablet is-size-6-mobile is-uppercase"
                    style="padding: 0"
                  >
                    subscriber
                    <span v-if="data.offers[index - 1]">
                      {{ data.offers[index - 1].votesNeeded + 1 }}
                    </span>
                    <span v-else>1</span>
                    to {{ offer.votesNeeded }}
                  </div>
                  <p
                    class="has-text-white title is-size-4-desktop is-size-5-tablet is-size-6-mobile"
                  >
                    all flats free for {{ offer.benefit }}
                  </p>
                  <p class="has-text-white">{{ offer.description }}</p>
                </div>
              </div>
              <div v-if="offer.image" class="columns is-gapless is-mobile">
                <div class="column is-half">
                  <img :src="buildImageUrl2(offer.image)" :alt="offer.name" />
                </div>
                <div class="column is-half">
                  <img :src="buildImageUrl(offer.image)" :alt="offer.name" />
                </div>
              </div>

              <!-- <div class="has-background-light" style="padding: 2rem">
                <div
                  class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile is-uppercase"
                >BENEFIT</div>
                <div class="subtitle is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                  All flats free for {{ offer.benefit }} for subscribers
                  <span
                    v-if="data.offers[index - 1]"
                  >
                    {{
                    data.offers[index - 1].votesNeeded + 1
                    }}
                  </span>
                  <span v-else>1</span>
                  {{data.offers[index - 1].votesNeeded}}
                  to {{ offer.votesNeeded }}
                </div>
                <p>{{ offer.description }}</p>
              </div>-->
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
      category: "goal"
    };
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/products/` + name + `.svg`);
    },
    buildImageUrl2: function(name) {
      return require(`@/assets/vehicles/` + name + `.jpg`);
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
export default class OmoMilestones extends Vue {}
</script>

<style lang="scss" scoped>
.is-centered {
  display: flex;
  // justify-content: center;
  align-items: center;
}

.progress {
  display: flex;
  width: 100%;
  height: 28px;
  overflow: hidden;
  justify-content: space-between;
  text-align: center;
}
.progress .step {
  flex-grow: 1;
  background: #cbefdb;
}
.progress .step.activated {
  background: #43d889;
}
.progress .step.subscribed {
  background: #89d9ae;
}
</style>
