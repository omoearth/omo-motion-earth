import OPerk from '~/components/OPerk/OPerk'

export default {
  name: 'o-perk',
  components: {
    OPerk
  },
  props: ['perks', 'sm', 'md', 'xl', 'space', 'mySwiper'],
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        initialSlide: 2,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        keyboard: {
          enabled: true
        }
      }
    }
  },
  computed: {},
  mounted() {
    // const swiper = this.mySwiper
    // swiper.on('click', function () {
    //   swiper.slideTo(swiper.clickedIndex)
    // })
  },
  methods: {}
}
