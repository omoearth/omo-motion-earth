<template>
  <section class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="buildImageUrl(main)" alt="main">
      </figure>
    </div>
    <div class="card-content" style="text-align: center;">
      <h1 class="title is-size-3 is-centered">
        {{ title }}
      </h1>
      <p class="subtitle is-size-5 is-centered">
        {{ price }}
      </p>
      <nuxt-link class="button is-primary is-large not-rounded" to="/registerUser">
        I WANT THIS
      </nuxt-link>
      <br>
      <a class="is-size-5" :href="detail.link">{{ detail.text }}</a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  name: 'o-perk',
  components: {},
  props: ['title', 'main', 'additional', 'price', 'btn', 'detail', 'activated'],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/vehicles/` + name.toLowerCase() + `.png`)
    }
  }
})
export default class OPerk extends Vue {}
</script>
