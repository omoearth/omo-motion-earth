<template>
  <section class="o-perk-select">
    <!-- <div v-swiper:mySwiper="swiperOption" class="my-swiper">
      <div class="swiper-wrapper">
        <div v-for="perk in perks" class="swiper-slide">
          <OPerk
            :title="perk.title"
            :main="perk.main"
            :additional="perk.additional"
            :price="perk.price"
            :btn="perk.btn"
            :detail="perk.detail"
          />
        </div>
      </div>
    </div>-->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OPerk from '~/components/OPerk.vue'

@Component({
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
})
export default class OPerkSelect extends Vue {}
</script>

<style lang="scss" scoped>
.o-perk-select {
  .swiper-container {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .swiper-slide {
    width: 300px;
  }
}
</style>
