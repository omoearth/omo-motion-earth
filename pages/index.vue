<template>
  <section>
    <OLanding />
    <OFooter :footer="footer" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OLanding from '@/components/OLanding.vue'
import OFooter from '@/layouts/OFooter.vue'

@Component({
  components: {
    OLanding,
    OFooter
  },
  data() {
    return {
      footer: {
        title: 'ENTER NOW',
        to: 'selectCity',
        styles: 'is-primary is-medium is-fullwidth'
      }
    }
  },
  methods: {}
})
export default class Index extends Vue {}
</script>
