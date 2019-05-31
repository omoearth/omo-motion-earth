<template>
  <section class="o-user-register">
    <div>
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="email">
        </div>
      </div>
      <div class="field">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the
          <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'o-user-register',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OUserRegister extends Vue {}
</script>
