<template>
  <div class="modal-card rankup-modal" style="width: auto">
    <!-- <section class="modal-card-body">
      <h1 class="title is-size-3 has-text-centered">
        {{ title }}
      </h1>
      <p class="subtitle is-size-5 has-text-centered">
        {{ subtitle }}
      </p>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="suggestion in suggestions" class="swiper-slide">
            <section class="card">
              <div class="card-header" style="flex-direction: column; justify-content: center;">
                <div class="card-header-title title is-centered">
                  {{ suggestion.title }}
                </div>
                <div class="card-header-title subtitle is-centered">
                  {{ suggestion.subtitle }}
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="buildImageUrl(suggestion.icon)" alt="main">
                </figure>
              </div>
              <div class="card-content">
                <p class="text has-centered">
                  {{ suggestion.text }}
                </p>
              </div>
              <footer class="card-footer">
                <div class="card-footer-item">
                  <button
                    class="button is-primary is-centered is-fullwidth"
                    @click="$parent.close()"
                  >
                    {{ suggestion.button.text }}
                  </button>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
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
})
export default class ORankupModal extends Vue {}
</script>

<style lang="scss" scoped>
.rankup-modal {
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
