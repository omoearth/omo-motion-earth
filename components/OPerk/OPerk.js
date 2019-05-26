export default {
  name: 'o-perk',
  components: {},
  props: [
    "title",
    "main",
    "additional",
    "price",
    "btn",
    "detail"
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
      return require(`@/assets/svg/` + name.toLowerCase() + `.svg`);
    },
  }
}
