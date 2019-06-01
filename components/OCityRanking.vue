<template>
  <section class="o-city-ranking">
    <ApolloQuery :query="require('../apollo/queries/cities.gql')" :variables="{ }">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          Loading...
        </div>
        <div v-else-if="error" class="error apollo">
          An error occured
        </div>

        <div v-else-if="data" class="result apollo">
          <div class="columns is-multiline">
            <div v-for="city in data.cities" :key="city.id" class="column is-one-quarter">
              <OCity :city="city" />
            </div>
          </div>
        </div>
        <div v-else class="no-result apollo">
          No result :(
        </div>
      </template>
    </ApolloQuery>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OCity from '~/components/OCity.vue'

@Component({
  name: 'o-city-ranking',
  components: { OCity },
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OCityRanking extends Vue {}
</script>
