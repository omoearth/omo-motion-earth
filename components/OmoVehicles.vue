<template>
  <div>
    <div class="section has-text-centered is-medium">
      <div
        class="title is-size-1 is-size-2-tablet is-size-4-mobile is-uppercase"
      >
        or just enjoy the freedom
      </div>
      <div
        class="subtitle is-size-3 is-size-4-tablet is-size-6-mobile has-text-dark"
      >
        as a pure citizen to easily access, drive and leave any green vehicle
        everywhere around its designated home area
      </div>
    </div>
    <div class="is-horizontal-centered">
      <img src="/iphone.png" />
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half">
        <img src="/vehicles/bike.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/bike.svg"
            width="55%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">11€ Flat XS</div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            non-electric bikes
          </div>
        </div>
      </div>
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/pedelec.svg"
            width="65%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">33€ eFlat S</div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            bikes, mini escooters, pedelecs
          </div>
        </div>
      </div>
      <div class="column is-half">
        <img src="/vehicles/uniboost.jpg" />
      </div>
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half">
        <img src="/vehicles/unu.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/scooter.svg"
            width="65%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">66€ eFlat M</div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            bikes, mini escooters, pedelecs, escooters
          </div>
        </div>
      </div>
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/minicar.svg"
            width="75%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">99€ eFlat L</div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            bikes mini escooters, pedelecs, escooters, mini ecars (2-4 seats)
          </div>
        </div>
      </div>
      <div class="column is-half">
        <img src="/vehicles/microlino.jpg" />
      </div>
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half">
        <img src="/vehicles/sono.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/car.svg"
            width="85%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">199€ eFlat XL</div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            bikes, mini escooters, pedelecs, escooters, mini ecars (2-4 seats),
            ecars (5+ seats)
          </div>
        </div>
      </div>
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/city.svg"
            width="85%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">255€ eFlat City</div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            plus public transport add-on
          </div>
        </div>
      </div>
      <div class="column is-half">
        <img src="/vehicles/public.jpg" />
      </div>
    </div>
    <div
      class="columns is-mobile is-gapless has-background-light"
      style="margin-bottom: 0; padding-bottom: 0"
    >
      <div class="column is-half">
        <img src="/vehicles/train.jpg" />
      </div>
      <div class="column is-half is-centered">
        <div class="has-text-centered">
          <img
            src="/products/intercity.svg"
            width="85%"
            style="padding-bottom: 1rem"
          />
          <div class="title is-size-2 is-size-4-mobile">
            555€ eFlat Intercity
          </div>
          <div class="subtitle is-size-4 is-size-6-mobile">
            plus eTrain & eBus add-on
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoVehicles extends Vue {}
</script>

<style lang="scss" scoped>
.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
