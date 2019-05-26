import OPerk from '~/components/OPerk'

export default {
  name: 'o-perk',
  components: {
    OPerk
  },
  props: [
    "perks",
    "sm",
    "md",
    "xl",
    "space",
  ],
  data() {
    return {
      swiperOption: {
        slidesPerView: this.xl ? this.xl : 4,
        spaceBetween: this.space ? this.space : 30,
        allowTouchMove: false,
        initialSlide: 0, //recommendation
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        breakpoints: {
          1087: {
            slidesPerView: this.md ? this.md : 2,
            spaceBetween: this.space ? this.space : 30,
            allowTouchMove: true,
          },
          769: {
            slidesPerView: this.sm ? this.sm : 1,
            spaceBetween: this.space / 2 ? this.space : 15,
            allowTouchMove: true,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20
          }
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
