export default {
  name: 'o-rankup-modal',
  components: {},
  props: [
    "title",
    "subtitle"
  ],
  data() {
    return {
      suggestions: [{
          text: "1"
        },
        {
          text: "7"
        },
        {
          text: "5"
        }
      ],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }
      }
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
