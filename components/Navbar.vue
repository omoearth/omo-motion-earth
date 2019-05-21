<template>
    <nav class="navbar is-fixed-top">

      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="@/assets/omo.svg" alt="Logo">
        </a>
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" v-for="(item, key) of items" :key="key" :to="item.to">{{ item.title }}
          </nuxt-link>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    data() {
      return {
        showNav: false,
        items: [
          {
            title: 'Home',
            to: {name: 'index'}
          },
          {
            title: 'About Us',
            to: {name: 'about'}
          },
          {
            title: 'Travel',
            to: {name: 'travel'}
          },
          {
            title: 'Signup',
            to: {name: 'signup'}
          },
          {
            title: 'Login',
            to: {name: 'login'}
          },
          {
            title: 'Profile',
            to: {name: 'profile'}
          }
        ]
      }
    }
  }
</script>
