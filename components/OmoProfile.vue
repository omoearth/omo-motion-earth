<template>
  <div>
    <div class="hero is-medium">
      <div class="hero-body background-image has-text-centered">
        <div class="container">
          <h2 class="title has-text-white is-size-giant is-uppercase">1500</h2>
          <h3 class="title has-text-white is-size-2 is uppercase">MUNICH</h3>
        </div>
      </div>
    </div>
    <div class="section hero is-white-ter">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">1.</p>
            <p class="heading">City Rank</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">2</p>
            <p class="heading">My Active Supporters</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">7</p>
            <p class="heading">My Invited friends</p>
          </div>
        </div>
      </nav>
    </div>
    <!-- <ApolloQuery :query="require('../apollo/queries/currentProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured {{ error }}</div>

        <div v-else-if="data" class="result apollo">
          <div class="hero is-medium">
            <div class="hero-body background-image has-text-centered">
              <div class="container">
                <img src="avatar.png" class="round" width="250rem">
                <h2 class="title has-text-white is-size-giant is-uppercase">1500</h2>
                <h3 class="title has-text-white is-size-2 is uppercase">MUNICH</h3>
                <h4 class="title is-size-5 has-text-white">{{ data.currentUser.name }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  props: ["Users"],
  data() {
    return {
      levels: [
        {
          title: "Invite 25 friends",
          credits: "+50 ØMOs",
          value: "+5 votes for your city",
          style: "is-primary",
          start: 4,
          end: 25
        },
        {
          title: "Invite 100 friends",
          credits: "+150 ØMOs",
          value: "+15 votes for your city",
          style: "is-primary",
          start: 4,
          end: 100
        }
      ],
      perks: [
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
      ],
      swiperOption: {
        effect: "coverflow",
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
          el: ".swiper-pagination",
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
    };
  }
})
export default class OmoProfile extends Vue {}
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
