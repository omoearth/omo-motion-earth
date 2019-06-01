<template>
  <div>
    <h1>Stella</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-transactions',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    buildImageUrl: function (name) {
      return require(`@/assets/cities/` + name.toLowerCase() + `.jpg`)
    }
  }
})
export default class OCity extends Vue {}
</script>

<style lang="scss" scoped>
.is-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
