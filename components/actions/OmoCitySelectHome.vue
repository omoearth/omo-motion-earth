<template>
  <div>
    <h1 class="title is-size-1">{{selected}}</h1>

    <b-field>
      <b-autocomplete
        v-model="name"
        size="is-large"
        rounded
        class="is-large"
        :data="filteredDataArray"
        placeholder="change hometown, f.e. Berlin, Paris, Prag etc"
        icon="magnify"
        @select="option => (selected = option)"
      >
        <template slot="empty">No results found</template>
      </b-autocomplete>
    </b-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return {
      data: ["Munich", "London", "Berlin", "Paris"],
      name: "",
      selected: "Munich"
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`);
    },
    defaultImageUrl: function() {
      return require("@/assets/background/team.png");
    }
  }
})
export default class OmoCitySelectHome extends Vue {}
</script>


<style lang="scss" scoped>
.hero-image {
  background: linear-gradient(
      to bottom,
      rgba(80, 80, 80, 0.3) 0%,
      rgba(82, 82, 82, 0.3) 100%
    ),
    url(/cities/munich.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.is-size-special {
  font-size: 4rem;
}
</style>
