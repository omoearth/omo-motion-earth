<template>
  <div>
    <nuxt-child/>
  </div>
</template>

<script type="ts">
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove("auth");
      this.$store.commit("setAuth", null);
    }
  }
};
</script>
