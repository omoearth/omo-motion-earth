<template>
  <div class="nav is-centered">
    <div class="has-text-centered">
      <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to">
        <div
          class="title is-uppercase is-size-4-mobile is-size-3-tablet is-size-2-desktop"
          style="padding: 1rem"
        >{{ item.title }}</div>
      </nuxt-link>
      <a style="padding: 1rem">
        <div
          class="title is-size-6-mobile is-size-5-tablet is-size-4-desktop"
          v-if="$store.state.auth"
          @click="logout"
        >logout</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

const Cookie = process.client ? require("js-cookie") : undefined;

@Component({
  components: {},
  data() {
    return {
      items: [
        { title: "Start", to: { name: "start" } },
        { title: "Profile", to: { name: "profile" } },
        { title: "Pricing", to: { name: "pricing" } },
        { title: "Cities", to: { name: "cities" } }
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
.nav {
  height: 100vh;
  width: 100%;
  background: lightgreen;
  overflow: hidden;
}
.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style lang="scss" scoped>
</style>
