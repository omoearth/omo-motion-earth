<template>
  <main class="omo-wrapper">
    <header class="omo-title">
      <OHeader />
    </header>
    <div class="omo-content">
      <nuxt style="height:100%;" />
    </div>
    <footer class="omo-footer">
      <OFooter />
    </footer>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OFooter from '@/layouts/OFooter.vue'
import OHeader from '@/layouts/OHeader.vue'
import OActions from '@/layouts/OActions.vue'

@Component({
  components: { OFooter, OHeader, OActions },
  data() {
    return {
      action: {
        name: 'button',
        link: '/',
        color: 'is-primary'
      }
    }
  }
})
export default class Layout extends Vue {}
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

.is-fullheight {
  min-height: 100% !important;
}
</style>

<style lang="scss" scoped>
.omo-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omo-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: block;
  position: relative;
}
.omo-header,
.omo-footer {
  flex: 0;
}
</style>
