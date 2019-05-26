import cities from '~/apollo/queries/cities'

export default {
  name: 'o-city-ranking',
  components: {},
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
    buildImageUrl: function (name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`);
    }
  },
  apollo: {
    cities: {
      prefetch: true,
      query: cities
    }
  }
}
