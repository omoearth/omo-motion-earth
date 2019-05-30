<template>
  <div>
    <OHero :title="header.title" :image="header.image" :css-styles="header.cssStyles" />
    <Team />
  </div>
</template>

<script>
import OHero from '~/components/OHero'
import Team from '~/components/legacy/Team'

export default {
  components: {
    OHero,
    Team
  },
  data() {
    return {
      header: {
        title:
          'Our mission is to empower you to unite your city around passionate movements that matter',
        cssStyles: 'is-size-1',
        image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902'
      }
    }
  }
}
</script>
