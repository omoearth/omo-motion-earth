<template>
  <div>
    <div class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="has-text-centered">
          <div class="title is-size-1 is-size-1-tablet is-size-4-mobile">
            UNLOCK FLATRATE
          </div>
          <div class="subtitle is-size-2 is-size-4-tablet is-size-6-mobile">
            vote for your city to influence where we start first
          </div>
        </div>
      </div>
    </div>
    <div class="top" style="height: 50vh">
      <no-ssr>
        <l-map
          id="map"
          :zoom="zoom"
          :center="center"
          :options="{
            zoomControl: false,
            scrollWheelZoom: false,
            draggable: false
          }"
        >
          <l-tile-layer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <l-circle
            :lat-lng="center"
            :radius="radius"
            color="#3FBE79"
            :opacity="0.3"
          ></l-circle>
        </l-map>
        <!-- <div v-if="selected">
                <div v-if="address">
                  <div class="title">
                    <span v-if="address.village">{{ address.village }}</span>
                    <span v-else-if="address.town">{{ address.town }}</span>
                    <span v-else-if="address.city">{{ address.city }}</span>
                  </div>
                  <div class="subtitle">
                    (
                    <span v-if="address.state">{{ address.state }},</span>
                    <span v-else-if="!address.state">{{ address.county }},</span>
                    <span v-if="address.country">{{ address.country }}</span>
                    )
                  </div>
                </div>
        </div>-->
      </no-ssr>
    </div>

    <div class="container section has-text-centered">
      <b-field>
        <b-autocomplete
          v-model="query"
          autofocus
          size="is-large"
          class="is-fullwidth"
          placeholder="search for home town, f.e. London, Madrid, Berlin etc"
          :data="places"
          icon="magnify"
          field="label"
          @select="option => (selected = option)"
        >
          <template slot="empty"
            >No results found</template
          >
        </b-autocomplete>
      </b-field>
      <button
        v-if="selected"
        class="button is-fullwidth is-large is-primary"
        @click="saveVote()"
      >
        SEND VOTE
      </button>
      <button v-else class="button is-fullwidth is-large is-primary" disabled>
        SELECT CITY TO VOTE
      </button>
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
      address: null,
      result: null
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
    saveVote() {
      if (this.address) {
        alert(JSON.stringify(this.address));
      }
    },
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
      this.result = result;
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
.leaflet-tooltip {
  width: 250px;
  height: 100px;
}
</style>
