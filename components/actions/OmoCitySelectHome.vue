<template>
  <div>
    <div v-if="selected">
      <div class="title">{{ selected.label }}</div>
    </div>
    <b-field>
      <b-autocomplete
        v-model="query"
        size="is-large"
        rounded
        placeholder="choose city"
        :data="cities"
        icon="magnify"
        field="label"
        @select="option => (selected = option)"
      >
        <template slot="empty"
          >No results found</template
        >
      </b-autocomplete>
    </b-field>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { OpenStreetMapProvider } from "leaflet-geosearch";
const provider = new OpenStreetMapProvider();

@Component({
  data() {
    return {
      cities: [],
      center: [48.137154, 11.576124],
      query: "",
      selected: null
    };
  },
  watch: {
    query() {
      this.geoSearch(this.query);
    },
    selected() {
      if (this.selected) {
        const lat = this.selected.x;
        const long = this.selected.y;
        this.center = [long, lat];
      }
    }
  },
  methods: {
    async geoSearch(query) {
      const results = await provider.search({ query: query });
      var cities = results.filter(function(location) {
        return (
          location.raw.type == "administrative" ||
          location.raw.type == "city" ||
          location.raw.type == "town" ||
          location.raw.type == "village"
        );
      });
      this.cities = cities;
    }
  }
})
export default class OmoCitySelectHome extends Vue {}
</script>
