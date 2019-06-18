<template>
  <!-- <div class="hero">
    <div class="hero-body">
  <div class="container has-text-centered">-->
  <ApolloQuery :query="require('@/apollo/queries/currentProfile.gql')">
    <template slot-scope="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading apollo">Loading...</div>
      <div v-else-if="error" class="error apollo">
        An error occured {{ error }}
      </div>

      <div v-else-if="data" class="result apollo">
        <h1 class="title is-size-1">
          WELCOME
          <span :v-if="data.currentUser.name" class="is-uppercase">
            {{ data.currentUser.name }}
          </span>
        </h1>
        <h2 class="subtitle is-size-3">
          {chuck} invites you to greenfluence your city
          <span v-if="data.currentUser.city" class="has-text-primary">
            {{ data.currentUser.city.name }}
          </span>
        </h2>
        <section class="id-medium">
          <img :src="banner" />
        </section>
        <br />
        <p class="has-text-centered is-size-4 has-text-weight-medium">
          to
          <span class="has-text-primary has-text-weight-bold">share</span>
          every
          <b class="has-text-weight-bold">ride</b>, every
          <b class="has-text-weight-bold">eScooter</b>,
          <b class="has-text-weight-bold">eBike</b>,
          <b class="has-text-weight-bold">eCar</b> and any
          <b class="has-text-weight-bold">public transport</b>
          <br />
          <span class="is-size-3">
            all within
            <b class="has-text-primary has-text-weight-bold">one</b>
            simple app and
            <b class="has-text-primary has-text-weight-bold">flatrate</b>
          </span>
        </p>
      </div>
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
  <!-- </div>
    </div>
  </div>-->
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return {
      banner: "/banner.png"
    };
  }
})
export default class OmoWelcome extends Vue {}
</script>
