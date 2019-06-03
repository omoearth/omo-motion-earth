<template>
  <nav class="navbar is-fixed-top is-size-3 title is-transparent" style="padding: 0.5rem">
    title
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const Cookie = process.client ? require('js-cookie') : undefined

@Component({
  name: 'o-header',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/loginUser')
    }
  }
})
export default class OHeader extends Vue {}
</script>
