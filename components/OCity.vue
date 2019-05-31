<template>
  <section class="o-city">
    <div class="card">
      <div class="card-image has-text-centered">
        <figure class="image is-3by2">
          <img :src="buildImageUrl(city.name)">
        </figure>
        <div class="card-content is-overlay is-clipped is-center">
          <p class="title is-1 has-text-white">{{ city.votes }}</p>
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h1 class="title is-4">{{ city.name }}</h1>
            <!-- <p class="subtitle is-6">{{city.country.name}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import City from "~/interfaces/City";

@Component({
  name: "o-city",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`);
    }
  }
})
export default class OCity extends Vue {
  @Prop({ type: Object, required: true }) city!: City;
}
</script>

<style lang="scss" scoped>
.is-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
