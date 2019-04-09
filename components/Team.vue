<template>
    <section class="section is-medium has-background-white-ter">
      <div class="container has-text-centered">         
        <p class="title has-text-blue is-size-1 is-size-3-mobile">
          WE ARE CHANGING
        </p>
        <p class="subtitle is-4 is-size-5-mobile">
          the way of making your city wonderful
        </p>
      </div>
      <br>
      <br>
      <div class="container">
        <div class="columns is-multiline">

          <div class="column is-one-quarter" v-for="person in team" :key="person.id">

            <div class="card">
             <div class="card-image has-text-centered">
                <figure class="image">
                  <img :src="buildImageUrl(person.name)" />
                </figure>
                <!-- <div class="card-content is-overlay is-clipped is-center">
                  <p class="title is-1 has-text-white">{{city.votes}}</p>  
                </div> -->
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{person.name}}</p>
                    <p class="subtitle is-6">{{person.role}}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

</template>


<script>

// import cities from '~/apollo/queries/cities'

export default {
  data() {
    return {
      team: [
        { name: "Samuel", role: "CVO"},
        { name: "Dominik", role: "CEO" },
        { name: "Daniel", role: "CTO" },
        { name: "Chuck", role: "Community Development"},
        { name: "Stephanie", role: "Human Capital"},
        { name: "Stefan", role: "Business Development"},
      ]
    }
  },
  // apollo: {
  //   cities: {
  //     prefetch: true,
  //     query: cities
  //   }
  // },
  methods: {
    // vote: function(name, id) {
    //   alert('voted for ' + name)
    // },
    buildImageUrl: function (name) {
      return require(`@/assets/team/` + name.toLowerCase() + `.svg`);
    },
  }
}
</script>

<style scoped>

.is-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
