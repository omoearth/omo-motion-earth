// import cities from "~/apollo/queries/cities";
// import citiesSubscription from "~/apollo/subscriptions/cities";
import { Component, Vue } from "vue-property-decorator";
import OCity from "~/components/OCity/OCity";

@Component({
  name: "o-city-ranking",
  components: {
    OCity
  },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
  // apollo: {
  //   cities: {
  //     prefetch: true,
  //     query: cities,
  //     subscribeToMore: {
  //       document: citiesSubscription,
  //       // Variables passed to the subscription. Since we're using a function,
  //       // they are reactive
  //       variables() {
  //         return {
  //           param: this.param
  //         };
  //       },
  //       // Mutate the previous result
  //       updateQuery: (previousResult, { subscriptionData }) => {
  //         return subscriptionData.data;
  //         // Here, return the new result from the previous with the new data
  //       }
  //     }
  //   }
  // }
})
export default class OCityRanking extends Vue {}
