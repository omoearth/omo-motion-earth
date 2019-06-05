<template>
  <div>
    <OStart :start="start"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OStart from "@/components/OStart.vue";

@Component({
  components: {
    OStart
  },
  data() {
    return {
      start: {
        data: {
          // title: 'THE POWER OF MOVEMENT'
        }
      }
    };
  },
  methods: {}
})
export default class Index extends Vue {}
</script>
