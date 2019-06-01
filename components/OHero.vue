<template>
  <section class="o-hero">
    <section class="hero is-fullheight">
      <div class="hero-body hero-image">
        <div class="container has-text-centered">
          <p :v-if="title" class="title is-size-1-mobile has-text-light is-size-special">{{ title }}</p>

          <!-- <p
            :v-if="data.subtitle"
            :class="'subtitle is-2 is-size-4-mobile is-size-3-tablet ' + style.subtitle"
          >{{ data.subtitle }}</p>-->
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "o-hero",
  props: ["title"]
})
export default class OHero extends Vue {}
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
  font-size: 5rem;
}
</style>
