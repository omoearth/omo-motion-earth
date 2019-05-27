import cities from '~/apollo/queries/cities'
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
      query: cities
    }
  }
}
