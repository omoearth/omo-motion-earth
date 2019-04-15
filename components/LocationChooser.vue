<template>
  <div>
    <article class="message">
      <div class="message-header" v-on:click="reset()">
        <p>{{!location ? title : shortTitle + ": " + location.label}}</p>
        <span v-show="!isExpanded && location" v-on:click="accept()" class="icon is-medium">
          <font-awesome-icon style="color:#0ad338;" icon="check"></font-awesome-icon>
        </span>
        <span v-show="!isExpanded && !location" v-on:click="accept()" class="icon is-medium">
          <font-awesome-icon style="color:#cd480f;" icon="question"></font-awesome-icon>
        </span>
      </div>
      <div v-show="isExpanded" class="message-body">
        <div class="level">
          <no-ssr>
            <v-select taggable
                      v-model="location"
                      v-on:change="chosenLocationChanged"
                      :placeholder="'Choose or type a location'"
                      :options="recentLocations"
                      :searchable="true">
              <template slot="option" slot-scope="option">
                {{ option.label}}
              </template>
            </v-select>
          </no-ssr>
          <span v-show="location" v-on:click="accept()" class="icon is-medium">
            <font-awesome-icon style="color:#0ad338;" icon="check"></font-awesome-icon>
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  //import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'nuxt-fortawesome'

  export default {
    mounted() {
      this.$nextTick(() => {
        if (!this.useCurrentPosition) {
          return;
        }

        let self = this;

        // Get the user's current location.
        // If possible, set it as start coordinates, else just ignore the error and let the user choose.
        navigator.geolocation.getCurrentPosition(function (pos) {
          self.location = {
            label: 'Your current location',
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
        }, function () {
          // TODO: This is for testing only! Remove afterwards
          self.location = self.recentLocations[0];
        });

      })
    },
    props: [
      "title",
      "shortTitle",
      "useCurrentPosition",
      "startExpanded"
    ],
    name: "LocationChooser",
    mounted() {
      this.isExpanded = this.startExpanded;
    },
    methods: {
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
        location: null,
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
