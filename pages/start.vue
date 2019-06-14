<template>
  <div v-swiper:mySwiper="swiperOption" class="my-swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <OmoWelcome/>
      </div>
      <div class="swiper-slide o-vimeo">
        <OmoVideo/>
      </div>
      <div class="swiper-slide">
        <OmoVote/>
      </div>
      <div class="swiper-slide">
        <OmoCitySelectHome/>
      </div>
      <div class="swiper-slide o-vimeo">
        <OmoUserLoginWithEmailLink/>
      </div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OmoWelcome from "@/components/start/OmoWelcome.vue";
import OmoVote from "@/components/start/OmoVote.vue";
import OmoVideo from "@/components/start/OmoVideo.vue";
import OmoCitySelectHome from "@/components/actions/OmoCitySelectHome.vue";
import OmoUserLoginWithEmailLink from "@/components/actions/OmoUserLoginWithEmailLink.vue";

@Component({
  components: {
    OmoWelcome,
    OmoVote,
    OmoVideo,
    OmoUserLoginWithEmailLink,
    OmoCitySelectHome
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: false,
        slidesPerView: 1,
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      }
    };
  },
  mounted() {
    this.$store.commit("setShowFooter", "");
  },
  middleware: ["authentication"]
})
export default class Invite extends Vue {}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
