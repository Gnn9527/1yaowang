<template>
  <div class="homeMain">
    <div>
      <banner :data="bannerData"></banner>
      <homeNav v-if="homeNews_model.length" :data="homeNavData" :homeNavSrc="homeNavSrc" :homeNewsModel="homeNews_model || []"></homeNav>
      <grabTogether></grabTogether>
      <homeGoodsList></homeGoodsList>
    </div>

    <div v-if="error" class="homeError">
      <img :style="{width:'100%',height:'100%'}" src="../../../assets/wlError.jpg">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
import banner from './_banner'
import homeNav from './_nav'
import listUl from './_list_ul'
import grabTogether from './grab_together.vue'
import homeGoodsList from './_goodListMod.vue'

export default {
  name: 'homeMain',
  data() {
    return {
      bannerData: [],
      homeNavData: [],
      homeNavSrc: [],
      homeNews_model: [],
      res: [],
      error: null,
      homeError_img: {}
    }
  },
  components: {
    banner,
    homeNav,
    listUl,
    grabTogether,
    homeGoodsList
  },

  methods: {
    getIndexData() {
      this.$http(
        'http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533035341362&signature=****&siteid=9',
        {
          type: 'get'
        }
      )
        .then(res => {
          this.bannerData = res.data.data.banner
          this.homeNavData = res.data.data.templatedata[0].contentList
          this.homeNavSrc = res.data.data.templatedata[1].contentList[0]
          this.homeNews_model = res.data.data.notice
          // this.homeNavData = res.data.data.templatedata
          // console.log('res=>', res)
          // console.log(this.homeNews_model)
          Vue.nextTick(() => {
            new Swiper('.swiper-banner', {
              autoplay: true,
              pagination: {
                el: '.swiper-pagination'
              }
            })
          })
        })
        .catch(err => {
          this.error = err
        })
    },
    getWH() {
      return {
        width: document.querySelector('.homeMain').offsetWidth,
        height: document.querySelector('.homeMain').offsetHeight
      }
    }
  },

  mounted() {
    this.getIndexData()
  }
}
</script>

<style>
.homeMain {
  background: #f7f7f7;
  overflow-x: hidden;
  flex: 1;
  height: 100%;
}
.homeError {
  /* position: absolute;
  z-index: 1000; */
  width: 100%;
  height: 100%;
}

</style>

