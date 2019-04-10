<template>

    <div>
        <Header :title="header.title" :cssStyles="header.cssStyles"/>
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
        cssStyles: "is-size-1"
      },
    }
  },
  components: {
    Header,
    Team
  }
}
</script>