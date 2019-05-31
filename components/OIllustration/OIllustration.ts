import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "o-illustration",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function() {
      return require(`@/assets/banner.png`);
    }
  }
})
export default class OIllustration extends Vue {}
