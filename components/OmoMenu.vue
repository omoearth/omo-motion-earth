<template>
  <div>
    <OmoProfile />
    <div class="menu">
      <ul class="menu-list">
        <li>
          <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to">
            {{ item.title }}
          </nuxt-link>
        </li>
        <li>
          <a v-if="$store.state.auth" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OmoProfile from "@/components/OmoProfile.vue";

const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  components: { OmoProfile },
  data() {
    return {
      items: [
        { title: "Start", to: { name: "start" } },
        { title: "Profile", to: { name: "profile" } },
        { title: "Transactions", to: { name: "myTransactions" } },
        { title: "Pricing", to: { name: "pricing" } },
        {
          title: "Register User",
          to: { name: "registerUser" }
        },
        {
          title: "Invite User",
          to: { name: "createInviteLink" }
        }
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
export default class OmoMenu extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
  padding: 1rem 3rem 1rem 1rem;
  width: 250px;
}
</style>
