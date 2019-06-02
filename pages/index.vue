<template>
  <section>
    <div>
      <div v-if="$store.state.auth">
        <p>
          You are authenticated. You can see the
          <NuxtLink to="/secret">
            secret page
          </NuxtLink>!
        </p>
        <button @click="logout">
          Logout
        </button>
      </div>
      <p v-else>
        Please
        <NuxtLink to="/loginUser">
          login
        </NuxtLink>.
      </p>
    </div>
    <div class="container">
      <!-- <OLanding /> -->
    </div>
    <OFooter :footer="footer" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OLanding from '@/components/OLanding.vue'
import OFooter from '@/layouts/OFooter.vue'

@Component({
  components: {
    OLanding,
    OFooter
  },
  data() {
    return {
      title: 'THE POWER OF MOVEMENT'
    }
  },
  methods: {}
})
export default class Index extends Vue {}
</script>
