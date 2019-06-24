<template>
  <b-field>
    <b-autocomplete
      v-model="name"
      size="is-large"
      rounded
      :data="filteredDataArray"
      :placeholder="selected"
      icon="magnify"
      field="name"
      @select="option => (selected = option)"
    >
      <template slot="empty"
        >No results found</template
      >
    </b-autocomplete>
  </b-field>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
const data = require("@/static/cities.json");

@Component({
  data() {
    return {
      data,
      name: "",
      selected: ""
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
})
export default class OmoCitySelectHome extends Vue {}
</script>
