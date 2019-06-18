<template>
  <div>
    <!-- <parallax sectionHeight="100" fixed="true" :speed-factor="1" breakpoint="(min-width: 80px)">
      <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">
    </parallax>
    <parallax :speed-factor="1" breakpoint="(min-width: 80px)" style="background: lightblue">teil 2</parallax>-->
  </div>
  <!-- <div v-swiper:mySwiper="swiperOption" class="my-swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <OmoWelcome/>
      </div>
      <div class="swiper-slide o-vimeo">
        <OmoVideo/>
      </div>
      <div class="swiper-slide">
        <OmoCitySelectHome/>
      </div>
      <div class="swiper-slide">
        <OmoUserLoginWithEmailLink/>
      </div>
    </div>
  </div>-->
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import OmoWelcome from "@/components/start/OmoWelcome.vue";
import OmoVote from "@/components/start/OmoVote.vue";
import OmoVideo from "@/components/start/OmoVideo.vue";
import OmoCitySelectHome from "@/components/actions/OmoCitySelectHome.vue";
import OmoUserLoginWithEmailLink from "@/components/actions/OmoUserLoginWithEmailLink.vue";

// import Parallax from "vue-parallaxy";

import { mapMutations } from "vuex";

@Component({
  components: {
    OmoWelcome,
    OmoVote,
    OmoVideo,
    OmoUserLoginWithEmailLink,
    OmoCitySelectHome,
    Parallax
  },
  // data() {
  //   return {
  //     swiperOption: {
  //       centeredSlides: false,
  //       slidesPerView: 1,
  //       parallax: true,
  //       keyboard: {
  //         enabled: true
  //       },
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev"
  //       },
  //       direction: "vertical",
  //       breakpoints: {
  //         // when window width is <= 320px
  //         320: {
  //           slidesPerView: 1,
  //           spaceBetween: 10
  //         },
  //         // when window width is <= 480px
  //         480: {
  //           slidesPerView: 1,
  //           spaceBetween: 20
  //         },
  //         // when window width is <= 640px
  //         640: {
  //           slidesPerView: 1,
  //           spaceBetween: 30
  //         }
  //       }
  //     }
  //   };
  // },
  created() {
    this.setOmoContext({
      show: false
    });
  },
  methods: {
    ...mapMutations(["setOmoContext"])
  },
  middleware: ["authentication"]
})
export default class Invite extends Vue {}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}
.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
