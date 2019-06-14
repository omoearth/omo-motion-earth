<template>
  <div class="hero is-fullheight">
    <div class="hero-body hero-image">
      <div class="container has-text-centered">
        <img src="/brand.png" width="33%" />
        <br />
        <br />
        <h1
          v-if="home.data.title"
          class="title is-size-1-mobile has-text-light"
        >
          {{ home.data.title }}
        </h1>
        <h2 v-if="home.data.subtitle" class="subtitle has-text-light">
          {{ home.data.subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  props: ["home"]
})
export default class OmoHome extends Vue {}
</script>

<style lang="scss" scoped>
.hero-image {
  background: linear-gradient(
      to bottom,
      rgba(80, 80, 80, 0.3) 0%,
      rgba(82, 82, 82, 0.3) 100%
    ),
    url(/team.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
// .background-image {
//   background-image: linear-gradient(to bottom, rgba(80, 80, 80, 0.3)  0%,rgba(82, 82, 82, 0.3) 100%); */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }

.is-size-special {
  font-size: 4rem;
}
</style>
