import cities from '~/apollo/queries/cities'
import citiesSubscription from '~/apollo/subscriptions/cities'
import OCity from '~/components/OCity'

export default {

  name: 'o-city-ranking',
  components: {
    OCity
  },
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
  apollo: {
    cities: {
      prefetch: true,
      query: cities,
      subscribeToMore: {
        document: citiesSubscription,
        // Variables passed to the subscription. Since we're using a function,
        // they are reactive
        variables() {
          return {
            param: this.param,
          }
        },
        // Mutate the previous result
        updateQuery: (previousResult, {
          subscriptionData
        }) => {
          console.log(subscriptionData.data);
          console.log(previousResult);
          return subscriptionData.data;
          // Here, return the new result from the previous with the new data
        },
      },
    }
  }
}
