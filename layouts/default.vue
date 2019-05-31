<template>
  <section>
    <OHeader/>
    <nuxt/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OHeader from "@/layouts/OHeader.vue";

@Component({
  name: "o-layout",
  components: { OHeader },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class Layout extends Vue {}
</script>
