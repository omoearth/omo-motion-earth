<template>
  <div>
    <OHero :image="image" />
    <div class="fixed-to-bottom">
      <div class="container">
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">
                6
              </p>
              <p class="heading">
                MIN
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">
                4.5km
              </p>
              <p class="heading">
                DISTANCE COVERED
              </p>
            </div>
          </div>
        </nav>
        <div class="columns is-mobile">
          <div class="column is-half">
            <a class="button is-light is-medium is-fullwidth" to="/app/finish">CLOSE VEHICLE</a>
          </div>
          <div class="column is-half">
            <nuxt-link
              class="button is-dark is-medium is-fullwidth"
              to="/app/goto-vehicle"
            >
              FINISH RIDE
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OHero from '~/components/OHero'

export default {
  components: {
    OHero
  },
  data() {
    return {
      image: '/products/pedelec.png'
    }
  }
}
</script>

<style>
.fixed-to-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2rem 2.5rem;
  background-color: #fafafa;
}
</style>
