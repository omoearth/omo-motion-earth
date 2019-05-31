<template>
  <section class="o-hero">
    <section class="hero is-dark is-fullheight">
      <div
        class="hero-body background-image"
        :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(80, 80, 80, 0.3)  0%,rgba(82, 82, 82, 0.3) 100%), url(' + image + ')' }"
      >
        <div class="container has-text-centered">
          <p :v-if="title" :class="'title is-size-1-mobile ' + cssStyles">
            {{ title }}
          </p>
          <p :v-if="subtitle" class="subtitle is-2 is-size-4-mobile is-size-3-tablet">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  name: 'o-hero',
  components: {},
  props: ['title', 'subtitle', 'image', 'cssStyles'],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OHero extends Vue {}
</script>

<style lang="scss" scoped>
.background-image {
  /* background-image: linear-gradient(to bottom, rgba(80, 80, 80, 0.3)  0%,rgba(82, 82, 82, 0.3) 100%); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.is-size-special {
  font-size: 5rem;
}
</style>
