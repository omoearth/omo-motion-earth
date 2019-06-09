
<template>
  <div>
    <ApolloQuery :query="require('../apollo/queries/currentProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          Loading...
        </div>
        <div v-else-if="error" class="error apollo">
          An error occured {{ error }}
        </div>

        <div v-else-if="data" class="result apollo">
          <div class="hero-body background-image">
            <div class="hero-body has-text-centered">
              <div class="container">
                <img src="avatar.png" class="round" width="250rem">
                <h1 class="title is-size-1 has-text-white">
                  {{ data.currentUser.name }}
                </h1>
                <h2 class="title has-text-white is-size-3">
                  1. MUNICH
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-result apollo">
          No result :(
        </div>
      </template>
    </ApolloQuery>

    <div class="section hero is-dark">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              450.
            </p>
            <p class="heading">
              My Rank
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              266
              <span class="is-size-2">Ø</span>
              <span class="is-size-4 has-text-grey" />
            </p>
            <p class="heading">
              MY CREDIT
              <span class="has-text-primary">+600 Ø</span>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              3
            </p>
            <p class="heading">
              Invited Friends
            </p>
          </div>
        </div>
      </nav>
    </div>

    <div class="section">
      <section class="hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="title">
              WIN YOUR LIFELONG FLATRATE
            </div>
            <div
              class="subtitle"
            >
              Become your cities greenfluencer Erlkönig. The more people you invite, the higher your rank, the more free credits you receive
            </div>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Credits (1Ø = 1€)</th>
                  <th>Invites needed to rank up</th>
                </tr>
              </thead>
              <tbody v-for="rank in ranks" :key="rank.place">
                <tr :class="rank.selected">
                  <th>{{ rank.place }} {{ rank.title }}</th>
                  <td>{{ rank.credits }} Ø</td>
                  <td>{{ rank.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="hero">
        <div class="hero-body">
          <div class="has-text-centered columns">
            <div v-for="perk in perks" :key="perk.id" class="column is-one-quarter">
              <div class="card">
                <div class="has-text-centered">
                  <figure class>
                    <img :src="buildImageUrl(perk.image)" :alt="perk.name">
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
                  <div class="card-footer-item has-background-primary is-fullwidth">
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
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="title is-size-1">
              Which city is leading?
            </div>
            <div
              class="subtitle"
            >
              The more credits a city is buying, the higher the city rank. After the countdown, the first city will get the first flatrate fleets
            </div>

            <OCityRanking />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OCityRanking from '@/components/OCityRanking.vue'

@Component({
  name: 'o-profile',
  components: { OCityRanking },
  props: ['Users'],
  data() {
    return {
      ranks: [
        {
          place: '1.',
          title: 'Erlkönig',
          credits: '120.000',
          value: '+100'
        },
        {
          place: '2.',
          title: 'Green Rank X',
          credits: '36.000',
          value: '+75'
        },
        {
          place: '3.',
          title: 'Green Rank X',
          credits: '12.000',
          value: '+50'
        },
        {
          place: '4.-10.',
          title: 'Green Rank X',
          credits: '6.000',
          value: '+25'
        },
        {
          place: '11.-25.',
          title: 'Green Rank X',
          credits: '2.400',
          value: '+10'
        },
        {
          place: '26.-100.',
          title: 'Green Rank X',
          credits: '1.200',
          value: '+6'
        },
        {
          place: '101.-500.',
          title: 'Green Rank X',
          credits: '600',
          value: '+3',
          selected: 'is-selected'
        },
        {
          place: '500.-1000.',
          title: 'Green Rank X',
          credits: '100',
          value: '-2'
        },
        {
          place: '1.000+',
          title: 'no rank',
          credits: '0',
          value: '-4'
        }
      ],
      perks: [
        {
          name: '+15ø +15ø',
          image: '0',
          description: '50 votes',
          price: 0,
          priceCurrency: '€',
          category: 'token'
        },
        {
          name: '30 ø',
          image: '25',
          description: '25 votes',
          price: 25,
          priceCurrency: '€',
          businessFunction: 'BUY',
          category: 'token'
        },
        {
          name: '150 ø',
          image: '100',
          description: '100 votes',
          price: 100,
          priceCurrency: '€',
          businessFunction: 'BUY',
          category: 'token'
        },
        {
          name: '2500 ø',
          image: '1000',
          description: '1000 votes',
          price: 1000,
          priceCurrency: '€',
          businessFunction: 'BUY',
          category: 'token'
        }
      ],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 50,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/offers/` + name + `.png`)
    }
  }
})
export default class OProfile extends Vue {}
</script>

<style scoped>
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
