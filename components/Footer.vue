<template>
   <footer class="footer">
        <div class="has-text-centered">
            <span v-for="(item, key) of items" :key="key" ><nuxt-link :to="item.to">{{ item.title }}</nuxt-link></span>
        </div>
    </footer>
</template>

<script>

export default {
  data() {
    return {
        items: [
        {
          title: 'Imprint',
          to: { name: 'imprint' }
        }
      ]
    }
  }
}
</script>