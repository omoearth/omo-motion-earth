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
      <div class="section">
        <p class="has-text-centered is-size-4">
          imagine yourself cruising <b>every city</b> on any sharing <b>eBike</b>, sharing <b>eScooter</b> and sharing <b>eCar</b> <br>
          <span class="is-size-3">all within <b class="has-text-primary">one</b> simple <b class="has-text-primary">flatrate</b></span>
        </p>
      </div>
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
        imageUrl: "banner.png", 
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
