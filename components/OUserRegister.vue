<template>
  <section class="o-user-register">
    <div class="section has-text-centered">
      <h1 class="title">
        SAVE YOUR GREEN SEAT
      </h1>
      <h2 class="subtitle">
        join the waitinglist and get an early access to your city campaign
      </h2>
    </div>
    <div>
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="email">
        </div>
      </div>
      <div class="field">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the
          <a href="#">terms and conditions</a>
        </label>
      </div>
      <OUserLogin />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OUserLogin from '@/components/OUserLogin.vue'

@Component({
  name: 'o-user-register',
  components: { OUserLogin },
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OUserRegister extends Vue {}
</script>
