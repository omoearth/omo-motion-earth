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
                  MUNICH
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

    <div class="section hero is-dark" style="padding: 4rem 0">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-giant">
              150€
            </p>
            <p class="heading">
              ØMO CREDITS
            </p>
          </div>
        </div>
      </nav>
    </div>

    <div class="section hero is-light">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              1.
            </p>
            <p class="heading">
              City Rank
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              2
            </p>
            <p class="heading">
              MY LEVEL
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              2
            </p>
            <p class="heading">
              Invited Friends
            </p>
          </div>
        </div>
      </nav>
    </div>

    <div class="container section">
      <div class="card">
        <div class="card-image">
          <progress class="progress is-large is-primary" :value="78" :max="100">
            PROGRESS CONTENT
          </progress>
        </div>
        <div class="card-content">
          <div class="content">
            <div class="is-size-2 has-text-weight-bold">
              GOAL 1: 78 von 100 Supporter
            </div>
            <ul>
              <li class="is-size-5">
                MUNICH (alpha)
              </li>
              <li class="is-size-5">
                1x mini eScooter
              </li>
              <li class="is-size-5">
                1x Pedelec
              </li>
              <li class="is-size-5">
                1x eScooter
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <div class="columns is-multiline">
        <div v-for="level in levels" :key="level.place" class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <progress
                class="progress is-large"
                :class="level.style"
                :value="level.start"
                :max="level.end"
              />
            </div>
            <div class="card-content">
              <div class="content">
                <div class="is-size-4 has-text-weight-bold">
                  {{ level.title }}
                </div>
                {{ level.credits }} Ø
                <br>
                {{ level.value }}
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-profile',
  components: {},
  props: ['Users'],
  data() {
    return {
      levels: [
        {
          title: 'Inspire 1 friend',
          credits: '+10 ØMOs',
          value: '+1 vote for your city',
          style: 'is-primary',
          start: 1,
          end: 1
        },
        {
          title: 'Inspire 3 friends',
          credits: '+50 ØMOs',
          value: '+5 votes for your city',
          style: 'is-primary',
          start: 1,
          end: 2
        },
        {
          title: 'Inspire 5 friends',
          credits: '+150 ØMOs',
          value: '+15 votes for your city',
          style: 'is-dark'
        },
        {
          title: 'Inspire 10 friends',
          credits: '+250 ØMOs',
          value: '+25 votes for your city',
          style: 'is-dark'
        },
        {
          title: 'Inspire 15 friends',
          credits: '+500 ØMOs',
          value: '+50 votes for your city',
          style: 'is-dark'
        },
        {
          title: 'Inspire 25 friends',
          credits: '+1000 ØMOs',
          value: '+100 votes for your city',
          style: 'is-dark'
        },
        {
          title: 'Inspire 50 friends',
          credits: '+2500 ØMOs',
          value: '+250 votes for your city',
          style: 'is-dark'
        },
        {
          title: 'Inspire 100 friends',
          credits: '+10.000 ØMOs',
          value: '+1.000 votes for your city',
          style: 'is-dark'
        },
        {
          title: 'Inspire 1000+ friends',
          credits: 'lifelong flatrate',
          value: '+10.000 votes for your city',
          style: 'is-dark'
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
.is-size-giant {
  font-size: 4rem;
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
