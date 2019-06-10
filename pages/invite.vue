<template>
  <div>
    <OInvite />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OInvite from '@/components/OInvite.vue'

@Component({
  components: {
    OInvite
  },
  created() {
    this.$store.commit('setActions', [
      {
        name: 'vote city',
        link: '/selectCity',
        color: 'is-primary'
      }
    ])
  },
  middleware: ['authentication']
})
export default class Index extends Vue {}
</script>
