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
          <nuxt-link v-if="!$store.state.auth" to="/registerUser" class="navbar-item">Register</nuxt-link>
          <a v-if="$store.state.auth" href="#" class="navbar-item" @click="logout">Logout</a>
        </div>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  name: "o-header",
  components: {},
  props: [],
  data() {
    return {
      showNav: false,
      items: [
        { title: "Invite Link", to: { name: "inviteLink" } },
        { title: "Products", to: { name: "selectProduct" } },
        { title: "City Ranking", to: { name: "cityRanking" } },
        { title: "Profile", to: { name: "profile" } }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove("auth");
      this.$store.commit("setAuth", null);
      this.$router.push("/loginUser");
    }
  }
})
export default class OHeader extends Vue {}
</script>
