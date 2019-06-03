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

  methods: {}
})
export default class Index extends Vue {}
</script>
