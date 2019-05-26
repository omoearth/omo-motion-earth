<template>
  <div>
    <section class="hero is-fullheight">
        <section class="section has-text-centered">
            <img :src="buildImageUrl()" style="padding: 2rem 2rem"/>
            <h1 class="title is-4">CHOOSE THE HOMETOWN</h1>
            <h2 class="subtitle is-5">which you will lead at the forefront to bring home the green mobility flatrate</h2>
        </section>
        <div class="hero-body has-text-centered">
            <div class="container">
                <SelectCity></SelectCity>
                <br>
                <nuxt-link class="button is-primary is-large is-fullwidth" to="/selectPerk">SEND VOTE</nuxt-link>
            </div>

        </div>
    </section>  
  </div>
</template>

<script>
import SelectCity from '~/components/SelectCity'

export default {
  components: {
    SelectCity
  },
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/vote.svg`);
    }
  }
}
</script>

