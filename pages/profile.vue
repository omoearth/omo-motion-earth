<template>
  <div>
    <OHeader />
    <div class="hero-body background-image">
      <div class="hero-body has-text-centered">
        <div class="container">
          <img src="avatar.png" width="250rem">
          <h1 class="title is-size-1 has-text-white">
            Lies'chn Müller
          </h1>
          <h2 class="subtitle has-text-white is-size-2">
            MUNICH
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              25
            </p>
            <p class="heading">
              Leadership
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              15
            </p>
            <p class="heading">
              Points
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              5
            </p>
            <p class="heading">
              Invited Friends
            </p>
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
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1.</th>
              <td>Mister Chuck</td>
              <td>Munich</td>
              <td>111</td>
            </tr>
            <tr>
              <th>2.</th>
              <td>Samuel</td>
              <td>Munich</td>
              <td>55</td>
            </tr>
            <tr>
              <th>3.</th>
              <td>Ade</td>
              <td>Munich</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container section">
      <OCityRanking />
    </div>

    <div class="fixed-to-bottom">
      <button
        class="button is-primary is-medium is-fullwidth"
        @click="isRankupModalActive = true"
      >
        RANK UP
      </button>
    </div>

    <b-modal :active.sync="isRankupModalActive" :width="1200" scroll="keep">
      <ORankupModal
        title="become {green leader}"
        subtitle="the next rank you can reach start rank 35, for this goal you need 220 points. you can reach that by several actions"
      />
    </b-modal>
  </div>
</template>

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

<script>
import OHeader from '~/components/OHeader.vue'
import OCityRanking from '~/components/OCityRanking.vue'
import ORankupModal from '~/components/ORankupModal.vue'

export default {
  components: {
    OHeader,
    OCityRanking,
    ORankupModal
  },
  data() {
    return {
      isRankupModalActive: false
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  }
}
</script>
