<template>
  <section class="o-user-register">
    <ApolloMutation
      :mutation="require('../apollo/mutation/sendLoginLink.gql')"
      :variables="{ identifier: email }"
      :update="updateAuth"
    >
      <template v-slot="{ mutate, loading, error }">
        <div class="field is-grouped">
          <div class="control is-expanded">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="email"
            />
          </div>
          <!-- <label class="checkbox">
            <input type="checkbox" />
            I agree to the
            <a href="#">terms and conditions</a>
          </label>-->
          <button
            class="button is-primary"
            :disabled="loading"
            @click="mutate()"
          >
            LOGIN
          </button>
        </div>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "o-user-register",
  components: {},
  props: [],
  data() {
    return { email: "" };
  },
  computed: {},
  mounted() {},
  methods: {}
})
export default class OUserRegister extends Vue {}
</script>
