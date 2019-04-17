<template>
  <div>
    <!-- <p class="menu-label">
      {{title}}
    </p> -->
    <no-ssr>
      <b-autocomplete
        rounded
        :data="suggestions"
        :placeholder="currentPlaceholder"
        field="title"
        :icon="!icon ? 'magnify' : icon"
        :loading="isFetching"
        @typing="getAsyncData"
        v-on:select="accept">

        <template slot-scope="props">
          <span v-html="props.option.highlightedTitle"></span><br/>
          <span v-html="props.option.vicinity"></span>
        </template>
      </b-autocomplete>
    </no-ssr>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'

  export default {
    mounted() {

      this.currentPlaceholder = this.placeholder;

      if (!this.useCurrentPosition) {
        return;
      }

      const self = this;
      // Get the user's current location.
      // If possible, set it as start coordinates, else just ignore the error and let the user choose.
      this.isFetching = true;
      navigator.geolocation.getCurrentPosition(function (pos) {
        let url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + pos.coords.latitude + "%2C" + pos.coords.longitude + "%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=cJoX1MQAOOQaqI3ezAR8&app_code=II15gTFlSok2GRWWHm0kIw";

        self.$axios.$get(url).then(o => {
          const address = o.Response.View[0].Result[0].Location.Address.Label;
          const pos = o.Response.View[0].Result[0].Location.DisplayPosition;
          self.location = {
            label: address,
            lat: pos.Latitude,
            lng: pos.Longitude
          };
          self.isFetching = false;
          self.accept();
        }).catch(e => {
          this.isFetching = false;
          console.log("Reverse geocoding results:", "Error", e);
          self.location = {
            label: "Your current location",
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          self.accept();
        });
      }, function(e) {
        self.isFetching = false;
        self.currentPlaceholder = "Where are you?";
        self.reset();
      });
    },
    props: [
      "title",
      "placeholder",
      "icon",
      "initialLocation",
      "useCurrentPosition"
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
      accept(loc) {
        if (!loc) {
          this.reset();
          return;
        }
        console.log(loc.position);
        this.$emit('accept', {
          label:loc.title,
          lat:loc.position[0],
          lng:loc.position[1]
        });
      },
      reset() {
        this.$emit('reset');
      }
    },
    data() {
      let data = {
        currentPlaceholder:"",
        isFetching:false,
        suggestions: [],
        recentLocations: [],
        location: {
          lat: 48.170138,
          lng: 11.612823
        }
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
