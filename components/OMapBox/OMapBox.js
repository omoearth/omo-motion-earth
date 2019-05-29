export default {
  name: 'o-map-box',
  components: {},
  props: [],
  data() {
    return {
      accessToken: "pk.eyJ1Ijoic2FtdWVsYW5kZXJ0IiwiYSI6ImNqdzkwbTludTBrMWc0M3FyMHgzejRkdTQifQ.p12ti1p1LIFtaZQQ0DbXvw", // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v9', // your map style,
      location: null,
      zoom: 12,
      center: [11.576124, 48.137154]
    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
