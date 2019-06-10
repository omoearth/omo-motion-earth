<template>
  <section class="o-map-leaflet">
    <div id="map-wrap" style="height: 65vh; z-index: -1">
      <no-ssr>
        <l-map :zoom="data.zoom" :center="data.center" style="z-index: 0">
          <l-tile-layer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        </l-map>
      </no-ssr>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'o-map-leaflet',
  props: ['data'],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OMapLeaflet extends Vue {}
</script>
