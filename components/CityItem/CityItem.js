export default {
  name: 'city-item',
  components: {},
  props: [
    "city"
  ],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`);
    }
  }
}
