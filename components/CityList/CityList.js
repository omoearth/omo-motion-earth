import cities from '~/apollo/queries/cities'
import CityItem from "~/components/CityItem";


export default {
  name: 'cities',
  components: {
    CityItem
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
    vote: function (name, id) {
      alert('voted for ' + name)
    },
 
  },
  apollo: {
    cities: {
      prefetch: true,
      query: cities
    }
  }
}
