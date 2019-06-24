<template>
  <div class="card">
    <div class="card-image has-text-centered">
      <figure class="image is-3by2">
        <img :src="buildImageUrl(city.name)" />
      </figure>
      <div class="card-content is-overlay is-clipped is-center">
        <div>
          <p
            class="subtitle is-size-1 is-size-3-mobile is-size-2-tablet has-text-white"
          >
            {{ city.votes }}
          </p>
          <p
            class="title is-size-2 is-size-4-mobile is-size-3-tablet has-text-white is-uppercase"
          >
            {{ city.name }}
          </p>
        </div>
      </div>
    </div>
    <ApolloMutation
      :mutation="require('../apollo/mutation/voteCity.gql')"
      :variables="{ cityId: city.id, count: 1 }"
      @done="onDone"
    >
      <template slot-scope="{ mutate, loading, error }">
        <button
          :disabled="loading"
          class="button is-fullwidth is-dark"
          @click="mutate()"
        >
          VOTE
        </button>
        <p v-if="error">An error occured: {{ error }}</p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import City from "~/interfaces/City";

@Component({
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`);
    },
    mutate: function() {},
    onDone: function() {
      // alert("success");
    }
  }
})
export default class OmoCity extends Vue {
  @Prop({ type: Object, required: true }) city!: City;
}
</script>

<style lang="scss" scoped>
.is-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
