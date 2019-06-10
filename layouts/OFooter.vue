<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/icon.png" alt="Logo">
      </a>
      <div class="navbar-item center">
        <nuxt-link v-for="(action) of this.$store.state.actions" :key="action.name" class="button" :class="action.color || is-dark" :to="action.link || '/'">
          <span style="padding: 0 7rem">{{ action.name || '{ name }' }}</span>
        </nuxt-link>
      </div>
      <div v-if="$store.state.auth" class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div v-if="$store.state.auth" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
          <a class="navbar-link">MENU</a>
          <div class="navbar-dropdown">
            <nuxt-link v-for="(item, key) of items" :key="key" class="navbar-item" :to="item.to">
              <span>{{ item.title }}</span>
            </nuxt-link>
            <a v-if="$store.state.auth" href="#" class="navbar-item" @click="logout">LOGOUT</a>
            <!-- <nuxt-link v-if="!$store.state.auth" to="/registerUser" class="navbar-item">Register</nuxt-link> -->
          </div>
        </div>
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
  props: ['action'],
  data() {
    return {
      showNav: false,
      items: [
        { title: 'PRICING', to: { name: 'selectOffer' } },
        { title: 'CITIES', to: { name: 'cityRanking' } },
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
.navbar-item.center {
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
}
</style>
