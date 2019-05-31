<template>
  <section class="o-city-select">
    <!-- <no-ssr>
      <b-autocomplete v-model="name" size="is-medium" placeholder="start typing" icon="magnify">
        <template slot="empty">
          No results found
        </template>
      </b-autocomplete>
    </no-ssr>-->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-city-select',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OCitySelect extends Vue {}
</script>
