<template>
  <div class="swiper-banner banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(obj, i) in data" :key="i">
        <a :href="obj.content"><img :src="obj.pic" alt=""></a>
      </div>
    </div>
    <div class="swiper-pagination">
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'banner',
  props: ['data']
}
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 0;
  .swiper-slide {
    width: 100%;
    height: 1.5rem;
    img {
      width: 100%;
      height: 1.5rem;
      vertical-align: middle;
    }
  }
  .swiper-pagination {
    position: relative;
  }
}
</style>


