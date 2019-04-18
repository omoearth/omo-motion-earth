<template>
  <section class="is-fullheight">
    <div class="background"></div>
    <div style="margin: 2rem">
        <nav class="level is-mobile">
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">{25%}</p>
                    <p class="heading">BATTERY</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>                  
                    <p class="title">{25km}</p>
                    <p class="heading">Distance</p>
                </div>
            </div>
        </nav>
      <div class="button is-primary is-fullwidth is-medium">Start Vehicle</div>
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
