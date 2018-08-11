<template>
  <div class="swiper-detBanner detBanner">
    <ul class="swiper-wrapper">
      <li class="swiper-slide " v-for="(item, i) in data" :key="i">

        <img alt="" :src="item.image1">

      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
</template>
  
<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'detBanner',
  props: ['data'],
  methods: {
    newSwpListUl() {
      Vue.nextTick(() => {
        new Swiper('.swiper-detBanner', {
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  mounted() {
    this.newSwpListUl()
  }
}
</script>

<style scoped lang="scss">
.detBanner {
  width: 100%;
  position: relative;
  li {
    width: 1rem;
    height: 2.4rem;
    img {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
}
</style>

