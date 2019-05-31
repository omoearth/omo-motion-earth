import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "o-header",
  components: {},
  props: [],
  data() {
    return {
      showNav: false,
      items: [
        {
          title: "Profile",
          to: {
            name: "profile"
          }
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OHeader extends Vue {}
