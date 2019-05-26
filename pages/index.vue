<template>
  <section class>
    <div class="container">
      <Perks :perks="perks"/>
    </div>

    <Header
      :title="header.title"
      :subtitle="header.subtitle"
      :image="header.image"
      :cssStyles="header.cssStyles"
    />
    <!-- <Illustration :title="illustration.title" :subtitle="illustration.subtitle" :imageUrl="illustration.imageUrl" :text="illustration.text"/> -->
    -->
    <Vimeo :videoLink="vimeo.videoLink"/>
    <Explain/>
    <Cities/>
    <Pricing/>
  </section>
</template>

<script>
import Perks from "~/components/Perks";
import Header from "~/components/Header";
import Illustration from "~/components/Illustration";
import Explain from "~/components/Explain";
import Vimeo from "~/components/Vimeo";
import Cities from "~/components/Cities";
import Pricing from "~/components/Pricing";

export default {
  data() {
    return {
      perks: [
        {
          title: "eFlat XS",
          main: "miniscooter",
          additional: [],
          price: "1€/day",
          btn: {
            text: "earn 33 points",
            link: ""
          },
          detail: {
            text: "more detail",
            link: ""
          }
        },
        {
          title: "eFlat S",
          main: "pedelec",
          additional: ["miniscooter"],
          price: "2€/day",
          btn: {
            text: "earn 66 points",
            link: ""
          },
          detail: {
            text: "more detail",
            link: ""
          }
        },
        {
          title: "eFlat M",
          main: "scooter",
          additional: ["miniscooter", "pedelec"],
          price: "3€/day",
          btn: {
            text: "earn 99 points",
            link: ""
          },
          detail: {
            text: "more detail",
            link: ""
          }
        },
        {
          title: "eFlat L",
          main: "minicar",
          additional: ["miniscooter", "pedelec", "scooter"],
          price: "5€/day",
          btn: {
            text: "earn 165 points",
            link: ""
          },
          detail: {
            text: "more detail",
            link: ""
          }
        }
      ],
      header: {
        title: "IT IS YOUR ERA NOW",
        subtitle:
          "to inspire and build together the most extraordinary green earth",
        cssStyles: "is-size-special",
        image: "https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa"
      },
      illustration: {
        title: "THE POWER OF MOVEMENT",
        subtitle: "in one green mobility flatrate",
        imageUrl: "banner.png",
        text:
          "imagine you can jump on any eBike, speed around with any eScooter and drive with any eCar while consuming only green energy and sustaining the earth, all within one simple subscription"
      },
      vimeo: {
        videoLink: "https://player.vimeo.com/video/323399729"
      }
    };
  },
  components: {
    Perks,
    Header,
    Explain,
    Illustration,
    Cities,
    Pricing,
    Vimeo
  }
};
</script>


<style>
.has-text-blue {
  color: #000b2c;
}
</style>
