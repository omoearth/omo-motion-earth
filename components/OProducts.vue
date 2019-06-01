<template>
  <section class="section">
    <div class="container">
      <div class="columns pricing-table is-multiline">
        <div v-for="product in products" :key="product.name" class="column is-3">
          <div class="card">
            <div class="card-image has-text-centered">
              <figure class="image">
                <img :src="buildImageUrl(product.image)" :alt="product.name">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    {{ product.price }}€* / day **
                  </p>
                  <p class="subtitle is-5">
                    {{ product.name }}
                  </p>
                </div>
              </div>

              <div class="is-size-5">
                {{ product.distance }}
              </div>
              <div>{{ product.estimated }}</div>
              <br>
              <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                <tbody v-for="feature in product.features" :key="feature.name">
                  <tr>
                    <td>{{ feature.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <footer class="card-footer">
              <nuxt-link
                class="button is-primary is-medium not-rounded is-fullwidth"
                to="/registerUser"
              >
                I WANT THIS
              </nuxt-link>
            </footer>
          </div>
        </div>
      </div>
      <section>
        *estimated future pricing, could be subject to change
        <br>**monthly payment
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  data() {
    return {
      products: [
        {
          name: 'eMini Flat',
          image: 'miniscooter',
          price: '1',
          distance: '100km / month',
          estimated: 'est. launch 2020 Q1',
          features: [
            {
              name: 'eMiniScooters'
            },
            {
              name: '-'
            },
            {
              name: '-'
            },
            {
              name: '-'
            }
          ]
        },
        {
          name: 'ePedelec Flat',
          image: 'pedelec',
          price: '2',
          distance: '200km / month',
          estimated: 'est. launch 2020 Q2',
          features: [
            {
              name: 'eMiniScooters'
            },
            {
              name: 'ePedelecs'
            },
            {
              name: '-'
            },
            {
              name: '-'
            }
          ]
        },
        {
          name: 'eScooter Flat',
          image: 'scooter',
          price: '3',
          distance: '300km / month',
          estimated: 'est. launch 2020 Q3',
          features: [
            {
              name: 'eMiniScooters'
            },
            {
              name: 'ePedelecs'
            },
            {
              name: 'eScooters'
            },
            {
              name: '-'
            }
          ]
        },
        {
          name: 'eMiniCar Flat',
          image: 'minicar',
          price: '5',
          estimated: 'est. launch 2021 Q1',
          distance: '500km / month',

          features: [
            {
              name: 'eMiniScooters'
            },
            {
              name: 'ePedelecs'
            },
            {
              name: 'eScooters'
            },
            {
              name: 'eMiniCars'
            }
          ]
        }
      ]
    }
  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/vehicles/` + name + `.png`)
    }
  }
})
export default class Products extends Vue {}
</script>

<style lang="scss" scoped>
.not-rounded {
  border-radius: 0;
}
</style>
