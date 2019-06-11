<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="has-text-centered columns">
          <div
            v-for="perk in perks"
            :key="perk.id"
            class="column is-one-quarter"
          >
            <div class="card">
              <div class="has-text-centered">
                <figure class>
                  <img :src="buildImageUrl(perk.image)" :alt="perk.name" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-size-5">
                      +{{ perk.description }} for your city
                    </p>
                  </div>
                </div>
              </div>

              <footer class="card-footer">
                <div
                  class="card-footer-item has-background-primary is-fullwidth"
                >
                  <div class="button is-primary is-medium not-rounded">
                    BUY ØMO CREDIT
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "o-profile",
  data() {
    return {
      perks: [
        {
          name: "+15ø +15ø",
          image: "0",
          description: "50 votes",
          price: 0,
          priceCurrency: "€",
          category: "token"
        },
        {
          name: "30 ø",
          image: "25",
          description: "25 votes",
          price: 25,
          priceCurrency: "€",
          businessFunction: "BUY",
          category: "token"
        },
        {
          name: "150 ø",
          image: "100",
          description: "100 votes",
          price: 100,
          priceCurrency: "€",
          businessFunction: "BUY",
          category: "token"
        },
        {
          name: "2500 ø",
          image: "1000",
          description: "1000 votes",
          price: 1000,
          priceCurrency: "€",
          businessFunction: "BUY",
          category: "token"
        }
      ]
    };
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/offers/` + name + `.png`);
    }
  }
})
export default class OVoucher extends Vue {}
</script>
