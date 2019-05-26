export default {
  name: 'o-city',
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
