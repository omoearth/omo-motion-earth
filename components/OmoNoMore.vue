<template>
  <div>
    <div class="section hero is-medium has-text-centered is-light">
      <div
        class="title is-size-1 is-size-1-tablet is-size-4-mobile"
        style="padding-bottom: 1rem"
      >TIME FOR A REFRESHING CHANGE</div>
      <div
        class="subtitle has-text-weight-medium is-size-2 is-size-4-tablet is-size-6-mobile has-text-dark"
      >enough with pollution, enough with wasting resources, enough with expensive mobility</div>
    </div>
    <div class="section">
      <div class="container">
        <div class="columns is-centered is-multiline is-mobile">
          <div class="column is-half-mobile is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/nomore/emissions.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-half-mobile is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/nomore/refill.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-half-mobile is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/nomore/apps.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-half-mobile is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/nomore/invest.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-half-mobile is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/nomore/repair.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-half-mobile is-one-third-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/nomore/insurance.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class OmoNoMore extends Vue {}
</script>
