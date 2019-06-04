
<template>
  <div>
    <ApolloQuery :query="require('../apollo/queries/currentProfile.gql')" :variables="{ }">
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
                <img src="avatar.png" width="250rem">
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

    <!-- <div class="section container has-text-centered">
      <div class="title">COUNTDOWN</div>
      <div class="subtitle">5 days till end of the campaign</div>
      <progress class="progress is-large is-primary" value="60" max="100">60%</progress>
    </div>-->

    <div class="container section">
      <nav class="level">
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
              25.
            </p>
            <p class="heading">
              My Rank
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              150
              <span class="is-size-2">Ø</span>
              <span class="is-size-4 has-text-grey">(+ 2.500)</span>
            </p>
            <p class="heading">
              MY CREDITS (1Ø = 1€)
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              12
            </p>
            <p class="heading">
              Invited Friend
            </p>
          </div>
        </div>
      </nav>
    </div>
    <div class="container section">
      <div class="columns">
        <div class="column is-three-quarter">
          <div class="title">
            WIN YOUR LIFELONG FLATRATE
          </div>
          <div
            class="subtitle"
          >
            Become your cities greenfluencer Erlkönig. The more people you invite, the higher your rank, the more free voucher credits you receive
          </div>
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
                <td>Erlkönig from winning city</td>
                <td>Munich</td>
                <td>33</td>
                <td>eFlat 4 life</td>
              </tr>
              <tr>
                <th>2.</th>
                <td>Omo Sapiens</td>
                <td>Berlin</td>
                <td>25</td>
                <td>+100.000 Ø</td>
              </tr>
              <tr>
                <th>3.</th>
                <td>Mister Chuck</td>
                <td>Munich</td>
                <td>20</td>
                <td>+50.000 Ø</td>
              </tr>
              <tr>
                <th>10.</th>
                <td>Karl</td>
                <td>Vienna</td>
                <td>15</td>
                <td>+10.000 Ø</td>
              </tr>
              <tr class="is-selected">
                <th>25.</th>
                <td>Omo Sapiens</td>
                <td>Paris</td>
                <td>12</td>
                <td>+1.000 Ø</td>
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
          <br>
          <br>
          <div class="container">
            <div class="title">
              ONLY ONE CITY WINS
            </div>
            <div class="subtitle">
              One € = One Vote -> The more money you, your city and your friends are investing the higher the rank of your city.
              After the campaign countdown, the city with the most votes will be selected as starting city.
            </div>

            <OCityRanking />
            <br>
            <br>
            <br>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  +1
                  <br>Friend
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    0€
                  </p>
                  <p class="title is-4">
                    +1 Invite Rank
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                min 25 Ø Credits
              </div>
              <div>10 of 7.500.000.000 available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-primary is-fullwidth">
                <div class="button is-primary is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  1
                  <br>Votes
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    10€
                  </p>
                  <p class="title is-4">
                    Activate Vote
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                10 Ø Credits
              </div>
              <div>∞ available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-primary is-fullwidth">
                <div class="button is-primary is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  2
                  <br>Votes
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    25€
                  </p>
                  <p class="title is-4">
                    Save 20%
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                30 Ø Credits
              </div>
              <div>∞ available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-dark is-fullwidth">
                <div class="button is-dark is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  5
                  <br>Votes
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    50€
                  </p>
                  <p class="title is-4">
                    Save 50%
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                75 Ø Credits
              </div>
              <div>∞ available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-dark is-fullwidth">
                <div class="button is-dark is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  10
                  <br>Votes
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    100€
                  </p>
                  <p class="title is-4">
                    Save 100%
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                200 Ø Credits
              </div>
              <div>∞ available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-dark is-fullwidth">
                <div class="button is-dark is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  50
                  <br>Votes
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    500€
                  </p>
                  <p class="title is-4">
                    Save 100%
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                1.000 Ø Credits
              </div>
              <div>10x of 100x available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-dark is-fullwidth">
                <div class="button is-dark is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  500
                  <br>
                  <span class="is-size-3">Votes Booster</span>
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    5.000€
                  </p>
                  <p class="title is-4">
                    Save 200%
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                20.000 Ø Credits
              </div>
              <div>1x of 5x available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-dark is-fullwidth">
                <div class="button is-dark is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
          <br>
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image" style="padding: 2rem">
                <span class="title is-size-1">
                  10.000
                  <br>
                  <span class="is-size-3">City Booster</span>
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-size-4">
                    100.000€
                  </p>
                  <p class="title is-4">
                    Save 500%
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                eFlat 4 life
              </div>
              <div>1x available</div>
              <br>
            </div>

            <footer class="card-footer">
              <div class="card-footer-item has-background-dark is-fullwidth">
                <div class="button is-dark is-medium not-rounded">
                  BUY VOTES
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OCityRanking from '@/components/OCityRanking.vue'

@Component({
  name: 'o-profile',
  components: { OCityRanking },
  props: [],
  data() {
    return {}
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
