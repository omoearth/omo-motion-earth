import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "o-perk",
  components: {},
  props: ["title", "main", "additional", "price", "btn", "detail", "activated"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function(name) {
      return require(`@/assets/vehicles/` + name.toLowerCase() + `.png`);
    }
  }
})
export default class OPerk extends Vue {}
