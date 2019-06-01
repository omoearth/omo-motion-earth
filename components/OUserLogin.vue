<template>
  <section class="o-user-login">
    <div>
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="email">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  name: 'o-user-login',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OUserLogin extends Vue {}
</script>
