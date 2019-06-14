<template>
  <div class="has-text-centered is-size-6 title">
    <div class="progress">
      <div class="step activated has-text-white is-size-4">MENU</div>
      <div class="step invited has-text-white is-size-4">CALL TO ACTION</div>
      <div class="step has-text-white is-size-4">DETAIL</div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from "nuxt-property-decorator";
// import gql from "graphql-tag";

// import {
//   toggleOmoComponents,
//   getOmoComponents
// } from "@/apollo/clientCache/queries";

// @Component({
//   methods: {
//     toggleComponent(id) {
//       this.$apollo.mutate({
//         mutation: toggleOmoComponents,
//         variables: { id }
//       });
//     }
//   }
// })
// export default class OmoNavBar extends Vue {}
</script>

<style lang="scss" scoped>
.foot {
  padding: 0;
  display: flex;
}
.center {
  flex-grow: 1;
}
.buttons {
  padding: 0.5rem;
}
</style>
