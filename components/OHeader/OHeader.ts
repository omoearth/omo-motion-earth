export default {
  name: 'o-header',
  components: {},
  props: [],
  data() {
    return {
      showNav: false,
      items: [{
        title: 'Profile',
        to: {
          name: 'profile'
        }
      },
      {
        title: 'APP (alpha)',
        to: {
          name: 'app'
        }
      }
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
