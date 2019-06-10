<template>
  <section class="o-transactions">
      <div class="title">MY BALANCES</div> <br>
        ØMOS: {10} <br>
        VOTES: {5}<br>
        INVITES: {1}<br>
        <br>
        <br>
    <table class="table">
  <thead>
    <tr>
        <th>DATE</th>
        <th>ASSET</th>
        <th>AMOUNT</th>
        <th>SENDER</th>
        <th>SENDER TYPE</th>
        <th>RECEIVER</th>
        <th>RECEIVER TYPE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>01.01.2019</td>
        <td>ØMO</td>
        <td>+10</td>
        <td>Omo Sapiens</td>
        <td>User</td>
        <td>MyUserName</td>
        <td>User</td>
    </tr>
    <tr>
        <td>01.01.2019</td>
        <td>VOTES</td>
        <td>+5</th>
        <td>MyUserName</td>
        <td>User</td>
        <td>MUNICH</td>
        <td>City</td>
    </tr>
    <tr>
        <td>01.01.2019</td>
        <td>INVITE</td>
        <td>+1</th>
        <td>Invited friend name</td>
        <td>User</td>
        <td>MyUserName</td>
        <td>User</td>
    </tr>
  </tbody>
</table>
    <!-- <ApolloQuery :query="require('../apollo/queries/cities.gql')" :variables="{ }">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">
          Loading...
        </div>
        <div v-else-if="error" class="error apollo">
          An error occured {{ error }}
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
      <ApolloSubscribeToMore
        :document="require('../apollo/subscriptions/cityChanged.gql')"
        :update-query="onCityChanged"
      />
    </ApolloQuery> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-transactions'
  //   methods: {
  //     onCityChanged(previousResult, { subscriptionData }) {
  //       // The previous result is immutable
  //       const newResult = {
  //         cities: [...previousResult.cities]
  //       }
  //       // Add the question to the list
  //       const replace = newResult.cities.find(
  //         x => x.id === subscriptionData.data.city.id
  //       )
  //       const index = newResult.cities.indexOf(replace)
  //       newResult.cities[index] = subscriptionData.data.city

//       return newResult
//     }
//   }
})
export default class OTransactions extends Vue {}
</script>
