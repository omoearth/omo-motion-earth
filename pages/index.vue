<template>
  <section class="">
    <div class="container section is-medium has-text-centered">
      <h1 class="title is-enormous ">
        WELCOME {x}
      </h1>
      <h2 class="subtitle is-size-3">
        to a new green era of effortless movement
      </h2>
    </div>
    <!-- <Header :title="header.title" :subtitle="header.subtitle" :image="header.image" :cssStyles="header.cssStyles"/>-->
    <div class="container" style="padding-top: 2rem">
      <Illustration :imageUrl="illustration.imageUrl" />
      <p class="section has-text-centered is-size-4">
        {{illustration.text}}
      </p>
      <Vimeo :videoLink="vimeo.videoLink"/>
    </div>
    <div class="is-medium container has-text-centered">
      <img :src="buildLogoUrl()" alt="motion earth" style="width: 15rem; padding: 4rem 0">
      <Explain></Explain>
    </div>
    <div class="section container has-text-centered">
      <div class="button is-primary is-large is-fullwidth">VOTE NOW</div>
    </div>
  </section>
</template>

<script>

import Header from '~/components/Header'
import Illustration from '~/components/Illustration'
import Vimeo from '~/components/Vimeo'
import Explain from '~/components/Explain'

export default {
  data() {
    return {
      illustration: {
        title: "VOTE - INVITE - WIN",
        subtitle: "the green mobility flatrate for you and your city",
        imageUrl: "banner.png", 
        text: "imagine you can jump on any eBike, speed around with any eScooter and drive with any eCar while consuming only green energy and sustaining the earth, all within one subscription"
      },
      vimeo: {
        videoLink: "https://player.vimeo.com/video/323399729"   
      }
    }
  },
  methods: {
    buildLogoUrl: function () {
      return require(`@/assets/motionearth.png`);
    },
  },
  components: {
    Header,
    Illustration,
    Vimeo,
    Explain
  }
}
</script>


<style scoped>

.is-enormous {
  font-size: 4rem;
}

</style>
