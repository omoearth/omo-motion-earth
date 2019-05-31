<template>
  <div>
    <section class="is-fullheight hero">
      <div class="hero-body">
        <div class="container">
          <OUserRegister/>
        </div>
      </div>
    </section>
    <OFooter :footer="footer"/>
  </div>
</template>

<script>
import OUserRegister from "~/components/OUserRegister";
import OFooter from "@/layouts/OFooter.vue";

export default {
  components: {
    OUserRegister,
    OFooter
  },
  data() {
    return {
      footer: {
        title: "Register TestUser",
        to: "/profile",
        styles: "is-fullwidth is-dark"
      }
    };
  }
};
</script>
