<template>
  <section class="o-header">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="@/assets/omo.svg" alt="Logo">
        </a>
        <div class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <nuxt-link
            v-for="(item, key) of items"
            :key="key"
            class="navbar-item"
            :to="item.to"
          >{{ item.title }}</nuxt-link>
        </div>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "o-header",
  components: {},
  props: [],
  data() {
    return {
      showNav: false,
      items: [
        {
          title: "Profile",
          to: {
            name: "profile"
          }
        },
        {
          title: "City Ranking",
          to: {
            name: "cityRanking"
          }
        },
        {
          title: "Register",
          to: {
            name: "registerUser"
          }
        },
        {
          title: "Login",
          to: {
            name: "loginUser"
          }
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OHeader extends Vue {}
</script>
