<template>
  <OInvite />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OInvite from '@/components/OInvite.vue'

@Component({
  components: {
    OInvite
  },
  middleware: ['authentication'],
  created() {
    console.log(this.$apolloProvider)

    console.log(this.$route.params.id)
  }
})
export default class Index extends Vue {}
</script>
