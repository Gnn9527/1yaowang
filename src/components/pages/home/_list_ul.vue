<template>
  <div class="swiper-ListUl ListUl">
    <ul class="swiper-wrapper">
      <li class="swiper-slide " v-for="(item, i) in data" :key="i">
        <!-- <router-link :to="'/goodsDetails'">  itemid-->
        <a href="javascript:;" @click="$router.push({ path: 'goodsDetails', query: { goodsId: item.itemid || item.itemId }})">
          <div class="img_box">
            <img alt="" :src="item.mainimg3 || item.productImg">
          </div>
          <p class="pro_name">{{ item.flashSaleProductName ||item.productName }}</p>
          <p class="price">￥{{ item.promotionPrice || item.sellPrice }}</p>
        </a>
      </li>
    </ul>
    <div class="swiper-scrollbar"></div>
  </div>
</template>
  
<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'list_ul',
  props: ['data'],
  methods: {
    newSwpListUl() {
      Vue.nextTick(() => {
        new Swiper('.swiper-ListUl', {
          slidesPerView: 3,
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
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
.ListUl {
  width: 100%;
  position: relative;
  li {
    width: 1rem;
    height: 1.61rem;
    a {
      p {
        white-space: normal;
        width: 1.1rem;
        height: 0.36rem;
        font-size: 0.13rem;
        line-height: 0.18rem;
        overflow: hidden;
        text-align: left;
      }
      .price {
        color: #f35448;
        font-size: 0.15rem;
      }
      background: pink;
      .img_box {
        width: 1.18rem;
        img {
          width: 0.88rem;
          height: 0.88rem;
        }
      }
    }
  }
  .swiper-scrollbar {
    position: absolute;
    bottom: 0;
  }
}
</style>

