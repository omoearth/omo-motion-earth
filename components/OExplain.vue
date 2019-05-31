<template>
  <section class="o-explain">
    <Card />
    <div class="has-text-centered">
      <div class="columns">
        <div v-for="item in items" :key="item.icon" class="column">
          <img :src="buildImageUrl(item.icon)" class="section" style="padding: 2rem 6rem">
          <h1 class="title is-4">
            {{ item.title }}
          </h1>
          <h2 class="subtitle is-5">
            {{ item.subtitle }}
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '~/components/Card.vue'

@Component({
  name: 'o-explain',
  components: { Card },
  props: [],
  data() {
    return {
      items: [
        {
          title: '1. VOTE',
          subtitle: 'for your city to decide which city comes first',
          icon: 'vote'
        },
        {
          title: '2. INSPIRE',
          subtitle: 'your friends to collect green leadership points',
          icon: 'invite'
        },
        {
          title: '3. WIN',
          subtitle: 'lifelong flatrates and enjoy the green city race',
          icon: 'win'
        }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/icons/` + name.toLowerCase() + `.svg`)
    }
  }
})
export default class OExplain extends Vue {}
</script>
