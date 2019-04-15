<template>
  <div>
    <p class="menu-label">
      {{title}}
    </p>
    <ul class="menu-list">
      <li>
        <no-ssr>
          <b-autocomplete
            rounded
            v-model="location.label"
            :data="suggestions"
            :placeholder="currentPlaceholder"
            field="title"
            :icon="!icon ? 'magnify' : icon"
            :loading="isFetching"
            @typing="getAsyncData"
            @select="option => selected = option">

            <template slot-scope="props">
              <span v-html="props.option.highlightedTitle"></span><br/>
              <span v-html="props.option.vicinity"></span>
            </template>
          </b-autocomplete>
        </no-ssr>
      </li>
    </ul>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'

  export default {
    mounted() {
      //this.$nextTick(() => {
        if (!this.useCurrentPosition) {
          return;
        }

        this.currentPlaceholder = this.placeholder;
        const self = this;
        // Get the user's current location.
        // If possible, set it as start coordinates, else just ignore the error and let the user choose.
        navigator.geolocation.getCurrentPosition(function (pos) {
          let url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + pos.coords.latitude + "%2C" + pos.coords.longitude + "%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=cJoX1MQAOOQaqI3ezAR8&app_code=II15gTFlSok2GRWWHm0kIw";

          self.$axios.$get(url).then(o => {
            const address = o.Response.View[0].Result[0].Location.Address.Label;
            const pos = o.Response.View[0].Result[0].Location.DisplayPosition;
            self.location = {
              lat: pos.Latitude,
              lng: pos.Longitude
            };
          }).catch(e => {
            console.log("Reverse geocoding results:", "Error", e);
          });
        }, function(e) {
          self.currentPlaceholder = "Where are you?";
        });

      //})
    },
    props: [
      "title",
      "placeholder",
      "icon",
      "initialLocation",
      "useCurrentPosition",
      "startExpanded"
    ],
    name: "LocationChooser",
    methods: {
      getAsyncData: debounce(async function (searchString) {
        if (!searchString.length) {
          this.suggestions = [];
          return
        }

        let placesUrl = "https://places.cit.api.here.com/places/v1/autosuggest" +
          "?at=" + this.location.lat+ "," + this.location.lng +
          "&q=" + encodeURIComponent(searchString) +
          "&app_id=cJoX1MQAOOQaqI3ezAR8" +
          "&app_code=II15gTFlSok2GRWWHm0kIw";

        this.isFetching = true;
        let data = await this.$axios.$get(placesUrl);
        this.isFetching = false;
        this.suggestions = data.results;
      }, 250),
      chosenLocationChanged(loc) {
        this.chosenLocation = loc;
        this.$emit('locationChanged', this.location);
      },
      accept() {
        if (!this.location) {
          return;
        }
        this.$emit('accept', this.location);
        this.isExpanded = false;
      },
      reset() {
        this.$emit('reset');
        this.isExpanded = true;
      }
    },
    data() {
      let data = {
        currentPlaceholder:"",
        isFetching:false,
        suggestions: [],
        recentLocations: [
          {
            label: "Adlzreiterstraße",
            type: "Home",
            lat: 48.125841,
            lng: 11.555695
          },
          {
            label: "Aventinstraße",
            type: "Home",
            lat: 48.133041,
            lng: 11.579294
          },
          {
            label: "Balanstraße",
            type: "Home",
            lat: 48.117359,
            lng: 11.601246
          },
          {
            label: "Sonnenstraße",
            type: "Club",
            lat: 48.136739,
            lng: 11.565173
          },
          {
            label: "Werner-Heisenberg-Allee",
            type: "Stadium",
            lat: 48.218647,
            lng: 11.624767
          },
          {
            label: "Von-Kahr-Straße",
            type: "Gastro",
            lat: 48.176360,
            lng: 11.461615
          },
          {
            label: "Englischer Garten",
            type: "Park",
            lat: 48.170138,
            lng: 11.612823
          }
        ],
        location: {
          lat: 48.170138,
          lng: 11.612823
        },
        isExpanded: false
      };

      return data;
    }
  }
</script>

<style scoped>
  .dropdown {
    width: 100%;
  }
</style>
