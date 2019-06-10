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
          <div class="hero is-fullheight">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title is-size-1">
                  WELCOME
                  <span :v-if="data.currentUser.name">{{ data.currentUser.name }}</span>
                </h1>
                <h2 class="subtitle is-size-3">
                  imagine cruising
                  <span v-if="data.currentUser.city" class="has-text-primary">{{ data.currentUser.city.name }}</span>
                  <span v-else class="has-text-primary"> your city</span>
                </h2>
                <section class="id-medium">
                  <img :src="banner">
                </section>
                <br>
                <p class="has-text-centered is-size-4 has-text-weight-medium">
                  with
                  <span class="has-text-primary">every</span> sharing
                  <b class="has-text-weight-bold">eScooter</b>, sharing
                  <b class="has-text-weight-bold">eBike</b>, sharing
                  <b class="has-text-weight-bold">eCar</b> and
                  <b class="has-text-weight-bold">any public</b> transport
                  <br>
                  <span class="is-size-3">
                    all within
                    <b class="has-text-primary has-text-weight-bold">one</b> simple app and
                    <b class="has-text-primary has-text-weight-bold">flatrate</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="hero-body background-image">
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
          </div> -->
        </div>
        <div v-else class="no-result apollo">
          No result :(
        </div>
      </template>
    </ApolloQuery>

    <OVimeo :video-link="vimeo.videoLink" />

    <div class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-size-2">
            IT'S IN YOUR HANDS
          </h1>
          <h2
            class="subtitle is-size-4"
          >
            to turn the green future of your city into a shared reality for everyone
          </h2>
          <div style="padding: 2rem 5rem">
            <div class="columns">
              <div v-for="item in items" :key="item.icon" class="column">
                <img :src="buildImageUrl(item.icon)" style="padding: 2rem 6rem">
                <h1 class="title is-4">
                  {{ item.title }}
                </h1>
                <h2 class="subtitle is-5">
                  {{ item.subtitle }}
                </h2>
              </div>
            </div>
            <br>
            <br>
            <nuxt-link to="/selectCity" class="button is-fullwidth is-large is-primary">
              VOTE NOW
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OVimeo from '@/components/OVimeo.vue'

@Component({
  name: 'o-landing',
  components: { OVimeo },
  data() {
    return {
      invitee: 'CHUCK',
      banner: '/banner.png',
      vimeo: {
        videoLink: 'https://player.vimeo.com/video/340139809'
      },
      items: [
        {
          title: '1. VOTE',
          subtitle: 'for your city to decide where we start',
          icon: 'vote'
        },
        {
          title: '2. GREENFLUENCE',
          subtitle: 'your friends to collect valuable credits',
          icon: 'invite'
        },
        {
          title: '3. WIN',
          subtitle: 'together the green city race',
          icon: 'win'
        }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.svg`)
    }
  }
})
export default class OCity extends Vue {}
</script>

<style lang="scss" scoped>
</style>
