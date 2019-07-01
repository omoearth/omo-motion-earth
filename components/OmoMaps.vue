<template>
  <div class="is-fullheight flexwrap">
    <div class="top">
      <no-ssr>
        <l-map
          :zoom="zoom"
          :center="center"
          :options="{ zoomControl: false, scrollWheelZoom: false }"
          style="z-index:0"
        >
          <l-tile-layer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <l-circle :lat-lng="center" :radius="radius" color="#3FBE79" :opacity="0.3" />
        </l-map>
        <div v-if="selected" class="is-overlay">
          <div class="is-centered">
            <div>
              <div v-if="address">
                <div class="title has-text-centered is-uppercase">
                  <span v-if="address.city">{{ address.city }}</span>
                  <span v-else-if="address.town">{{ address.town }}</span>
                  <span v-else-if="address.village">{{ address.village }}</span>
                </div>
                <div class="subtitle is-uppercase">
                  <span v-if="address.state">{{ address.state }},</span>
                  <span v-else-if="!address.state">{{ address.county }},</span>
                  <span v-if="address.country">{{ address.country }}</span>
                </div>
                {{ address }}
                {{ center }}
              </div>
            </div>
          </div>
        </div>
      </no-ssr>
    </div>
    <div class="actions">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half-tablet is-offset-3-tablet">
            <b-field style="height: 250px">
              <b-autocomplete
                v-model="query"
                class="is-large-mobile is-medium-tablet"
                rounded
                placeholder="choose your hometown"
                :data="places"
                icon="magnify"
                field="label"
                @select="option => (selected = option)"
              >
                <template slot="empty">No results found</template>
              </b-autocomplete>
            </b-field>
            <div class="button" @click="setCrispCity()">set city</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const provider = new OpenStreetMapProvider();

@Component({
  components: {},
  data() {
    return {
      places: [],
      zoom: 11.5,
      radius: 2000,
      center: [48.137154, 11.576124],
      query: "",
      selected: null,
      address: null
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
        this.address = this.getLocation(this.selected.y, this.selected.x);
      }
    }
  },
  methods: {
    // setCrispCity() {
    //   if (this.address) {
    //     alert(this.address);
    //     $crisp.push(["set", "message:text", [this.address.city]]);
    //   }
    // },
    async geoSearch(query) {
      const results = await provider.search({ query: query });
      const places = results.filter(function(place) {
        return (
          place.raw.type == "administrative" ||
          place.raw.type == "city" ||
          place.raw.type == "county" ||
          place.raw.type == "town" ||
          place.raw.type == "village"
        );
      });
      this.places = places;
    },
    async getLocation(lat, lon) {
      const endpoint =
        "https://nominatim.openstreetmap.org/reverse?accept-language=en";
      const result = await this.$axios.get(endpoint, {
        params: {
          format: "jsonv2",
          lat,
          lon
        }
      });
      this.address = result.data.address;
    }
  }
})
export default class OmoMaps extends Vue {}
</script>

<style lang="scss" scoped>
.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.flexwrap {
  display: flex;
  flex-direction: column;
}
.top {
  flex: 1;
}

.actions {
  padding: 2rem;
}
</style>
