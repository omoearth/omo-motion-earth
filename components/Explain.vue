<template>
  <section>
    <div class="has-text-centered">
      <h1 class="title is-size-2">
        WE || {x}
      </h1>
      <h2 class="subtitle is-size-4">
        invite{s} you to become the green leader of your city 
      </h2>
    </div>
    <div class="section has-text-centered">
      <div class="columns" >
        <div class="column" v-for="item in items" :key="item.icon">
          <img :src="buildImageUrl(item.icon)" class="section" style="padding: 2rem 6rem"/>
          <h1 class="title is-4">{{item.title}}</h1>
          <h2 class="subtitle is-5">{{item.subtitle}}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          title: "1. VOTE",
          subtitle: "for your city and join the race to decide in which city we will start",
          icon: "vote" 
        },
          {
          title: "2. INSPIRE",
          subtitle: "your fellow citizens at the forefront and collect green leadership points",
          icon: "invite" 
        },
        {
          title: "3. WIN",
          subtitle: "lifelong flatrates and break the doors wide open into a new exciting era",
          icon: "win" 
        }
      ]
    }
  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.svg`);
    },
  }
}
</script>