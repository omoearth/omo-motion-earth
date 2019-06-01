
<template>
  <div>
    <div class="hero-body background-image">
      <div class="hero-body has-text-centered">
        <div class="container">
          <img src="avatar.png" width="250rem">
          <h1 class="title is-size-1 has-text-white">
            Lies'chn Müller
          </h1>
          <h2 class="title has-text-white is-size-3">
            1. MUNICH
          </h2>
        </div>
      </div>
    </div>
    <div class="container section">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              1.
            </p>
            <p class="heading">
              My Rank
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              1
              <span class="is-size-2">Ø</span>
            </p>
            <p class="heading">
              MY CREDITS (1Ø = 1€)
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title is-size-1">
              0
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-profile',
  components: {},
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
