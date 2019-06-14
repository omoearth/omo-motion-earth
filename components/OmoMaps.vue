<template>
  <div id="map-wrap" style="height: 100vh; z-index: -1">
    <no-ssr>
      <l-map
        zoom="13"
        :center="center"
        scroll-wheel-zoom="false"
        style="z-index: 0"
      >
        <l-tile-layer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
      </l-map>
    </no-ssr>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return {
      center: [48.137154, 11.576124]
    };
  }
})
export default class OmoMaps extends Vue {}
</script>
