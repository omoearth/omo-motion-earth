<template>
  <div class="menu">
    <ul class="menu-list">
      <li>
        <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to">{{ item.title }}</nuxt-link>
      </li>
      <li>
        <a v-if="$store.state.auth" @click="logout">Logout</a>
      </li>
      <nuxt-link v-if="!$store.state.auth" to="/registerUser">Register</nuxt-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  components: {},
  data() {
    return {
      showNav: false,
      items: [
        { title: "Home", to: "/" },
        { title: "Profile", to: { name: "profile" } },
        { title: "Transactions", to: { name: "myTransactions" } },
        { title: "Services", to: { name: "selectOffer" } },
        { title: "Cities", to: { name: "cityRanking" } },
        { title: "Change City", to: { name: "selectCity" } },
        { title: "Buy Voucher", to: { name: "buyVouchers" } },
        { title: "Invite Friend", to: { name: "inviteFriend" } }
      ]
    };
  },
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove("auth");
      this.$store.commit("setAuth", null);
      this.$router.push("/");
    }
  }
})
export default class OmoNav extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
  padding: 1rem 3rem 1rem 1rem;
}
</style>
