<template>
<div class="listBanner">
    <div class="swiper-calbanners">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="obj in carousel" :key="obj.id">
                <img :src="obj.bannerUrl"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>    
</template>

<script>
import Swiper from "swiper";
// import Vue from "vue";

export default {
  name: "listBanner",
  props: ["carousel"],
  updated () {
    this.swiper.update()
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-calbanners", {
        loop: true,
        autoplay: {
          delay: 2500,
          // disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.listBanner {
  width: 100%;
  overflow: hidden;
  .swiper-calbanners{
      position: relative;
      height: 100%;
      background: #fff;
      .swiper-pagination{
        position: absolute;
        bottom: 0.03rem;
      }
  }
  img {
    width: 100%;
  }
}
</style>

