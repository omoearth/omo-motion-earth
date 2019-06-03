
<template>
  <div>
    <ApolloQuery :query="require('../apollo/queries/currentProfile.gql')" :variables="{ }">
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

    <div class="container section">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">3.</p>
            <p class="heading">My Rank</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              150
              <span class="is-size-2">Ø</span>
            </p>
            <p class="heading">MY CREDITS (1Ø = 1€)</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">1</p>
            <p class="heading">Invited Friend</p>
          </div>
        </div>
      </nav>
      <div class="section">
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
          <tbody>
            <tr>
              <th>1.</th>
              <td>Erlkönig from Munich</td>
              <td>Munich</td>
              <td>33</td>
              <td>+100.000 Ø</td>
            </tr>
            <tr>
              <th>2.</th>
              <td>Omo Sapiens</td>
              <td>Berlin</td>
              <td>25</td>
              <td>+50.000 Ø</td>
            </tr>
            <tr>
              <th>3.</th>
              <td>Mister Chuck</td>
              <td>Munich</td>
              <td>20</td>
              <td>+25.000 Ø</td>
            </tr>
            <tr>
              <th>10.</th>
              <td>Karl</td>
              <td>Vienna</td>
              <td>15</td>
              <td>+10.000 Ø</td>
            </tr>
            <tr>
              <th>25.</th>
              <td>Dani</td>
              <td>Paris</td>
              <td>10</td>
              <td>+2.500 Ø</td>
            </tr>
            <tr>
              <th>100.</th>
              <td>Phily</td>
              <td>Rome</td>
              <td>10</td>
              <td>+500 Ø</td>
            </tr>
            <tr>
              <th>500.</th>
              <td>Lis'l Lott'l</td>
              <td>Berlin</td>
              <td>5</td>
              <td>+100 Ø</td>
            </tr>
            <tr>
              <th>1000.</th>
              <td>Juli</td>
              <td>Hamburg</td>
              <td>2</td>
              <td>+50 Ø</td>
            </tr>
            <tr>
              <th>1000+</th>
              <td>Basti</td>
              <td>Munich</td>
              <td>1</td>
              <td>+25 Ø</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "o-profile",
  components: {},
  props: [],
  data() {
    return {};
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
