<template>
  <div>
    <OHeader/>
    <nuxt-child/>
  </div>
</template>

<script>
import OHeader from "~/components/OHeader";

export default {
  data() {
    return {};
  },
  components: {
    OHeader
  },
  head() {
    return {
      bodyAttrs: {
        class: "has-navbar-fixed-top"
      }
    };
  }
};
</script>