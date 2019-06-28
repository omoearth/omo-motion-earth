<template>
  <section class="hero">
    <div class="hero-body background-image">
      <div class="container">
        <ApolloQuery :query="require('@/apollo/queries/currentProfile.gql')">
          <template slot-scope="{ result: { loading, error, data } }">
            <div v-if="loading" class="loading apollo">Loading...</div>
            <div v-else-if="error" class="error apollo">An error occured {{ error }}</div>
            <div v-else-if="data" class="result apollo has-text-centered">
              <div>
                <h1 class="title is-size-1 has-text-light is-size-3-mobile">
                  WELCOME
                  <span
                    :v-if="data.currentUser.name"
                    class="is-uppercase"
                  >{{ data.currentUser.name }}</span>
                </h1>
                <h2 class="subtitle is-size-3 is-size-5-mobile has-text-light">
                  Samuel invites you to empower your city
                  <span
                    v-if="data.currentUser.city"
                    class="is-uppercase has-text-bolt"
                  >{{ data.currentUser.city.name }}</span>
                  <!-- <br />to quantum leap into a new era of clean and silent
                  mobility-->
                </h2>
              </div>
            </div>
            <div v-else class="no-result apollo">No result :(</div>
          </template>
        </ApolloQuery>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoWelcome extends Vue {}
</script>

<style lang="scss" scoped>
.background-image {
  background-size: cover;
  background-image: linear-gradient(
      rgba(77, 77, 77, 0.25),
      rgba(44, 44, 44, 0.25)
    ),
    url("/road.jpg");
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
