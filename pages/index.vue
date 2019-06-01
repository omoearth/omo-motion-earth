<template>
  <section>
    <div class="container">
      <OLanding />
    </div>
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
