<template>
  <div>
    <OHero :title="title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OHero from '@/components/OHero.vue'

@Component({
  components: {
    OHero
  },
  data() {
    return {
      title: 'THE POWER OF MOVEMENT'
    }
  },
  methods: {}
})
export default class Index extends Vue {}
</script>
