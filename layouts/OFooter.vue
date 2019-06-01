<template>
  <div class="fixed-to-bottom">
    <div class="container">
      <nuxt-link :class="'button is-medium ' + footer.styles" :to="footer.to">
        {{ footer.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Footer from '~/interfaces/Footer'

@Component({
  name: 'o-footer',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OFooter extends Vue {
  @Prop({ type: Object, required: true }) footer!: Footer;
}
</script>

<style lang="scss" scoped>
</style>
