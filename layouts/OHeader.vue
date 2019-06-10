<template>
  <h1 class="has-text-centered">
   <div  :key="this.$store.state.header">{{this.$store.state.header}}</div>
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-header'
})
export default class OHeader extends Vue {}
</script>
