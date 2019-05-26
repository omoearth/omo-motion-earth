<template>
  <section class="is-fullheight">
    <div class="background"></div>
    <div style="margin: 2rem">
        <nav class="level is-mobile">
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">{open | locked}</p>
                    <p class="heading">STATUS</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">{15%}</p>
                    <p class="heading">BATTERY</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>                  
                    <p class="title">{15km}</p>
                    <p class="heading">Distance</p>
                </div>
            </div>
        </nav>
        <div class="columns is-mobile">
          <div class="column is-half"> 
            <nuxt-link class="button is-light is-medium is-fullwidth is-rounded" to="/app/finish">PARK</nuxt-link>
          </div>
           <div class="column is-half"> 
            <nuxt-link class="button is-primary is-medium is-fullwidth is-rounded" to="/app/finish">FINISH</nuxt-link>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .background  {
    background-image: url('/moke.jpg');
    height: 60vh;
    background-repeat: no-repeat;
    background-position: center; 
  }
</style>
