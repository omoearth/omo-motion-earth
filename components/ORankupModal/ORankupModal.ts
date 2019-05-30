export default {
  name: 'o-rankup-modal',
  components: {},
  props: ['title', 'subtitle'],
  data() {
    return {
      suggestions: [
        {
          title: 'bonus',
          subtitle:
            'for many actions in this campaign there a hidden points. best practice? stay active',
          icon: 'friends',
          text:
            'next challenge for you, stay active for the next 2 days to claim bonus',
          button: {
            text: 'claim bonus'
          }
        },
        {
          title: 'invite friends',
          subtitle: 'become a greenfluencer',
          icon: 'friends',
          text:
            'For each person you invite, you also earn the points of your friends choose.',
          button: {
            text: 'invite 3 friends for next level'
          }
        },
        {
          title: 'invest',
          subtitle:
            "upgrade your flat or buy another, if you don't need it give it to an other person later",
          icon: 'friends',
          text:
            'master clue: convience your team to upgrade too, and you earn their points to',
          button: {
            text: 'upgrade / buy new perk for next level'
          }
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
          slideShadows: true
        },
        keyboard: {
          enable: true
        }
      }
    }
  },
  computed: {},
  mounted() {
    // const swiper = this.mySwiper;
    // swiper.on("click", function() {
    //   swiper.slideTo(swiper.clickedIndex);
    // });
  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.png`)
    }
  }
}
