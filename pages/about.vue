<template>

    <div>
        <Header :title="header.title" :image="header.image" :cssStyles="header.cssStyles"/>
        <Team />
    </div>
    
</template>

<script>
import Header from '~/components/Header'
import Team from '~/components/Team'

export default {
  data() {
    return {
      header: {
        title: 'Our mission is to empower you to unite your city around passionate movements that matter',
        cssStyles: "is-size-1",
        image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902"
      },
    }
  },
  components: {
    Header,
    Team
  }
}
</script>