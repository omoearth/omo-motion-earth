<template>
  <div>
    <ApolloQuery :query="require('../apollo/queries/currentProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">
          An error occured {{ error }}
        </div>

        <div v-else-if="data" class="result apollo">
          <img
            :src="
              'https://ui-avatars.com/api/?name=' +
                data.currentUser.name +
                '&size=512&background=3FBE79&color=fefefe'
            "
            class="round"
            width="250rem"
          />
          <br />
          <h2 class="subtitle" style="padding: 1rem">
            {{ data.currentUser.name }}
          </h2>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class OmoProfile extends Vue {}
</script>
