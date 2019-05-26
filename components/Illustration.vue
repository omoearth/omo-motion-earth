<template>    
  <div>
    <img :src="buildImageUrl()" />
  </div>     
</template>

<script>
  export default {
    methods: {
      buildImageUrl: function () {
        return require(`@/assets/banner.png`);
      },
    }
  }
</script>