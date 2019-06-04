
<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ApolloQuery :query="require('../apollo/queries/currentProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured {{ error }}</div>

        <div v-else-if="data" class="result apollo">
          <div class="hero-body background-image">
            <div class="hero-body has-text-centered">
              <div class="container">
                <img src="avatar.png" width="250rem">
                <h1 class="title is-size-1 has-text-white">{{ data.currentUser.name }}</h1>
                <h2 class="title has-text-white is-size-3">MUNICH</h2>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

    <!-- <div class="section container has-text-centered">
      <div class="title">COUNTDOWN</div>
      <div class="subtitle">5 days till end of the campaign</div>
      <progress class="progress is-large is-primary" value="60" max="100">60%</progress>
    </div>-->

    <div class="container section">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">1.</p>
            <p class="heading">City Rank</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">25.</p>
            <p class="heading">My Rank</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              150
              <span class="is-size-2">Ø</span>
              <span class="is-size-4 has-text-grey"></span>
            </p>
            <p class="heading">MY CREDITS (150€)</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">12</p>
            <p class="heading">Invited Friend</p>
          </div>
        </div>
      </nav>
    </div>
    <div class="container section">
      <div class="columns">
        <div class="column is-three-quarter">
          <div class="title">WIN YOUR LIFELONG FLATRATE</div>
          <div
            class="subtitle"
          >Become your cities greenfluencer Erlkönig. The more people you invite, the higher your rank, the more free voucher credits you receive</div>
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>City</th>
                <th>Invites</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody :key="user.rank" v-for="user in users">
              <tr>
                <th>{{ user.rank }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.invites }}</td>
                <td>{{ user.credits }}</td>
              </tr>
            </tbody>
          </table>
          <br>
          <br>
          <div class="container">
            <div class="title">ONLY ONE CITY WINS</div>
            <div class="subtitle">
              One € = One Vote -> The more money you, your city and your friends are investing the higher the rank of your city.
              After the campaign countdown, the city with the most votes will be selected as starting city.
            </div>

            <OCityRanking/>
            <br>
            <br>
            <br>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="card" style="padding-bottom: 2rem" :key="perk.id" v-for="perk in perks">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  {{perk.title}}
                  <br>
                  {{perk.action}}
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">{{perk.price}}€</p>
                  <p class="title is-4">{{perk.benefit}}</p>
                </div>
              </div>

              <div class="is-size-5">min {{perk.credits}} Ø</div>
              <div>{{perk.available.from}} of {{perk.available.to}} available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-primary is-fullwidth">
                <div class="button is-primary is-medium not-rounded">BUY VOTES</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OCityRanking from "@/components/OCityRanking.vue";

@Component({
  name: "o-profile",
  components: { OCityRanking },
  props: ["Users"],
  data() {
    return {
      users: [
        {
          rank: "1",
          name: "Erlkönig from winning city",
          city: "Munich",
          invites: "33",
          credits: "eFlat 4 life"
        },
        {
          rank: "2",
          name: "Johanna",
          city: "Berlin",
          invites: "25",
          credits: "+100.000"
        },
        {
          rank: "3",
          name: "Mister Chuck",
          city: "Munich",
          invites: "20",
          credits: "+50.000"
        },
        {
          rank: "10.",
          name: "Karl",
          city: "Vienna",
          invites: "15",
          credits: "+10.000"
        },
        {
          rank: "25.",
          name: "Omo Sapiens",
          city: "Munich",
          invites: "12",
          credits: "+2.500",
          style: "is-selected"
        },
        {
          rank: "100.",
          name: "Philapp",
          city: "Rome",
          invites: "10",
          credits: "+500"
        },
        {
          rank: "500.",
          name: "Lis'l Lott'l",
          city: "Freiburg",
          invites: "5",
          credits: "+100"
        },
        {
          rank: "1.000.",
          name: "Juli",
          city: "Hamburg",
          invites: "2",
          credits: "+25"
        },
        {
          rank: "1.000+",
          name: "Basti",
          city: "Munich",
          invites: "1",
          credits: "+10"
        }
      ],
      perks: [
        {
          id: "1",
          title: "+1",
          action: "friend",
          price: "0",
          benefit: "rank up",
          credits: "25",
          available: {
            from: "10",
            to: "7.500.000.000"
          }
        },
        {
          id: "2",
          title: "1",
          action: "vote",
          price: "10",
          benefit: "activate account",
          credits: "10",
          available: {
            from: "0",
            to: "∞"
          }
        },
        {
          id: "3",
          title: "3",
          action: "vote",
          price: "25",
          benefit: "+20% credits",
          credits: "30",
          available: {
            from: "0",
            to: "∞"
          }
        },
        {
          id: "4",
          title: "5",
          action: "vote",
          price: "50",
          benefit: "+50% credits",
          credits: "75",
          available: {
            from: "0",
            to: "∞"
          }
        },
        {
          id: "5",
          title: "10",
          action: "votes",
          price: "100",
          benefit: "+100% credits",
          credits: "200",
          available: {
            from: "0",
            to: "∞"
          }
        },
        {
          id: "6",
          title: "50",
          action: "votes",
          price: "500",
          benefit: "+100% credits",
          credits: "500",
          available: {
            from: "0",
            to: "100"
          }
        },
        {
          id: "7",
          title: "500",
          action: "votes",
          price: "5000",
          benefit: "+200% credits",
          credits: "20.000",
          available: {
            from: "0",
            to: "10"
          }
        },
        {
          id: "8",
          title: "10.000",
          action: "votes",
          price: "100.000",
          benefit: "eFlat 4 life",
          credits: "",
          available: {
            from: "0",
            to: "1"
          }
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OProfile extends Vue {}
</script>

<style scoped>
img {
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
