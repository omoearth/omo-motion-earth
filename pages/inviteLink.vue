<template>
  <section>
    <div class="container">
      <OInvite />
    </div>
    <OFooter :footer="footer" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OInvite from '@/components/OInvite.vue'
import OFooter from '@/layouts/OFooter.vue'

@Component({
  components: {
    OInvite,
    OFooter
  },
  data() {
    return {
      footer: {
        title: 'JOIN PRIVATE BETA',
        to: 'selectCity',
        styles: 'is-primary is-fullwidth'
      }
    }
  },
  methods: {}
})
export default class Index extends Vue {}
</script>
