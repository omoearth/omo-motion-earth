export default {
  name: 'o-explain',
  components: {},
  props: [],
  data() {
    return {
      items: [{
        title: '1. VOTE',
        subtitle: 'for your city to decide which city comes first',
        icon: 'vote'
      },
      {
        title: '2. INSPIRE',
        subtitle: 'your friends to collect green leadership points',
        icon: 'invite'
      },
      {
        title: '3. WIN',
        subtitle: 'lifelong flatrates and enjoy the green city race',
        icon: 'win'
      }
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.svg`)
    }
  }
}
