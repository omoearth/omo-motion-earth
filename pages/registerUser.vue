<template>
  <div>
    <section class="is-fullheight hero">
      <div class="hero-body has-text-centered">
        <div class="section container">
          <OUserRegister />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OUserRegister from '~/components/OUserRegister'

export default {
  components: {
    OUserRegister
  }
}
</script>
