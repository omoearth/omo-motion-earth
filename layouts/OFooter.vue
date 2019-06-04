<template>
  <nav class="navbar is-fixed-bottom is-light">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" href="/">
        <img src="/logo.svg" alt="Logo">
      </a>-->
      <div :v-if="button" class="navbar-item">
        <nuxt-link v-if="!$store.state.auth" to="/registerUser" class="navbar-item">
          Register
        </nuxt-link>
        <a v-if="$store.state.auth" href="#" class="navbar-item" @click="logout">Logout</a>
        <!-- <nuxt-link
          class="button is-primary"
          :class="button.style"
          :to="button-link"
        >{{ button.text }}</nuxt-link>-->
      </div>

      <div class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <nuxt-link v-for="(item, key) of items" :key="key" class="navbar-item" :to="item.to">
          <span class="button is-dark">{{ item.title }}</span>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const Cookie = process.client ? require('js-cookie') : undefined

@Component({
  name: 'o-footer',
  components: {},
  props: ['button'],
  data() {
    return {
      showNav: false,
      items: [
        { title: 'PRICING', to: { name: 'selectOffer' } },
        { title: 'CITY RANKING', to: { name: 'cityRanking' } },
        { title: 'MY PROFILE', to: { name: 'profile' } }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/')
    }
  }
})
export default class OFooter extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  border-top: solid 1px lightgray;
}
</style>
