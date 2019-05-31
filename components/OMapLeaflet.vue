<template>
  <section class="o-map-leaflet">
    <div id="map-wrap" style="height: 100vh; z-index: -1">
      <no-ssr>
        <l-map :zoom="props.zoom" :center="props.center" style="z-index: 0">
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
  components: {},
  props: ['props'],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OMapLeaflet extends Vue {}
</script>
