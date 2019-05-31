import { Component, Vue, Prop } from 'vue-property-decorator'
import City from '~/models/City'

@Component({
  name: 'o-city',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`)
    }
  }
})
export default class OCity extends Vue {
  @Prop({ type: Object, required: true }) city!: City;
}
