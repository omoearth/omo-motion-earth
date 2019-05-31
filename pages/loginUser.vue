<template>
  <div>
    <section class="is-fullheight hero">
      <div class="hero-body">
        <div class="container">
          <OUserLogin/>
        </div>
      </div>
    </section>
    <OFooter :footer="footer"/>
  </div>
</template>

<script>
import OUserLogin from "~/components/OUserLogin";
import OFooter from "@/layouts/OFooter.vue";

export default {
  components: {
    OUserLogin,
    OFooter
  },
  data() {
    return {
      footer: {
        title: "Login",
        to: "/profile",
        styles: "is-fullwidth is-dark"
      }
    };
  }
};
</script>
