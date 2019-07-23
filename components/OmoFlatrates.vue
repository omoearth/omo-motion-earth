<template>
  <div class>
    <div class="hero is-light is-medium">
      <div class="hero-body">
        <div class="has-text-centered">
          <div class="title is-size-1 is-size-1-tablet is-size-4-mobile">OUR SERVICE</div>
          <div
            class="subtitle is-size-2 is-size-4-tablet is-size-6-mobile"
          >choose your favorite flatrates and combine them as you wish</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile is-gapless" style="margin-bottom: 0; padding-bottom: 0">
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img src="/products/pedelec.svg" width="65%" style="padding-bottom: 1rem" />
          <div class="title is-size-2 is-size-4-mobile">eFlat S</div>
          <div class="subtitle is-size-4 is-size-6-mobile">bikes, mini e-scooters & pedelecs</div>
        </div>
      </div>
      <div class="column is-half">
        <img src="/vehicles/uniboost.jpg" />
      </div>
    </div>
    <div class="columns is-mobile is-gapless" style="margin-bottom: 0; padding-bottom: 0">
      <div class="column is-half">
        <img src="/vehicles/emco.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img src="/products/scooter.svg" width="65%" style="padding-bottom: 1rem" />
          <div class="title is-size-2 is-size-4-mobile">eFlat M</div>
          <div class="subtitle is-size-4 is-size-6-mobile">eScooters and eMotorcycles</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile is-gapless" style="margin-bottom: 0; padding-bottom: 0">
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img src="/products/minicar.svg" width="75%" style="padding-bottom: 1rem" />
          <div class="title is-size-2 is-size-4-mobile">eFlat L</div>
          <div class="subtitle is-size-4 is-size-6-mobile">mini eCars (2-4 seats)</div>
        </div>
      </div>
      <div class="column is-half">
        <img src="/vehicles/microlino.jpg" />
      </div>
    </div>
    <div class="columns is-mobile is-gapless" style="margin-bottom: 0; padding-bottom: 0">
      <div class="column is-half">
        <img src="/vehicles/sion.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img src="/products/car.svg" width="85%" style="padding-bottom: 1rem" />
          <div class="title is-size-2 is-size-4-mobile">eFlat XL</div>
          <div class="subtitle is-size-4 is-size-6-mobile">eCar (5+ seats)</div>
        </div>
      </div>
    </div>
    <div class="columns is-mobile is-gapless" style="margin-bottom: 0; padding-bottom: 0">
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img src="/products/city.svg" width="85%" style="padding-bottom: 1rem" />
          <div class="title is-size-2 is-size-4-mobile">eFlat City</div>
          <div class="subtitle is-size-4 is-size-6-mobile">public transport</div>
        </div>
      </div>
      <div class="column is-half">
        <img src="/vehicles/tram.jpg" />
      </div>
    </div>
    <div class="columns is-mobile is-gapless" style="margin-bottom: 0; padding-bottom: 0">
      <div class="column is-half">
        <img src="/vehicles/train.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img src="/products/intercity.svg" width="85%" style="padding-bottom: 1rem" />
          <div class="title is-size-2 is-size-4-mobile">eFlat Intercity</div>
          <div class="subtitle is-size-4 is-size-6-mobile">eTrain & eBus</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoFlatrates extends Vue {}
</script>

<style lang="scss" scoped>
.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
