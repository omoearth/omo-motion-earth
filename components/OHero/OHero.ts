import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "o-hero",
  components: {},
  props: ["title", "subtitle", "image", "cssStyles"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OHero extends Vue {}
