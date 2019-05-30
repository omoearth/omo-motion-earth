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

              <div>{{ product.distance }}</div>
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
              <nuxt-link class="button is-primary is-medium is-fullwidth not-rounded" to="/signup">
                I WANT THIS
              </nuxt-link>
            </footer>
          </div>
        </div>
      </div>
      <section>*estimated future pricing, could be subject to change  <br>**monthly payment</section>
    </div>
  </section>
</template>

<style>
    .not-rounded { border-radius: 0;}
</style>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'eMini Flat',
          image: 'miniscooter',
          image2: 'miniscooter',
          price: '1',
          distance: '150km / month',
          estimated: 'EST. 2020 Q1',
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
          image2: 'pedelec',
          price: '2',
          distance: '300km / month',
          estimated: 'EST. 2020 Q2',
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
          image2: 'scooter',
          price: '3',
          distance: '450km / month',
          estimated: 'EST. 2020 Q3',
          features: [
            {
              name: 'eMiniScooters'
            },
            {
              name: 'ePedelecs'
            },
            {
              name: 'eScooter'
            },
            {
              name: '-'
            }
          ]
        },
        {
          name: 'eCar Flat',
          image: 'car',
          image2: 'car',
          price: '5',
          estimated: 'EST. 2021 Q1',
          distance: '600km / month',
          features: [
            {
              name: 'eMiniScooters'
            },
            {
              name: 'ePedelecs'
            },
            {
              name: 'eScooter'
            },
            {
              name: 'eCar'
            }
          ]
        }
      ]
    }
  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/products/` + name + `.png`)
    }
  }
}
</script>
