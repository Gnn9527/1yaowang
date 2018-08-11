<template>
  <div v-if="mobileFlashSaleNewItems.length">
    <div class="grabTogether">
      <div class="grabTop rel">
        <p class="dib">
          <!-- class="dib" -->
          <span class="grab_time_left dib">距时间仅剩
            <i>|</i>
          </span>
          <span class="grab_time dib ce54649">
            <!-- endTime  可以传一个结束时间 -->
            <countdown :endTime="endTime"></countdown>
          </span>
        </p>
        <a href="javascript:;" class="grab_more dib">
          <i class="icon iconfont icon_rightarrow"></i>
          <span>更多</span>
        </a>
      </div>
      <listUl v-if="mobileFlashSaleNewItems.length" :data="mobileFlashSaleNewItems"></listUl>
    </div>
    <div class="ypc-swipe mb10">
      <div class="ypc-swipe-items-wrap">
        <a href=" ">
          <img src="https://p2.maiyaole.com/img/mobile/20186/1532510758958183.jpg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
import listUl from './_list_ul'
import countdown from './_Countdown'
export default {
  name: 'grabTogether',
  data() {
    return {
      mobileFlashSaleNewItems: [],
      endTime: 0
    }
  },
  components: {
    listUl,
    countdown
  },
  methods: {
    getListUlData() {
      this.$http(
        'http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533177261926&signature=****&siteid=9',
        {
          type: 'get'
        }
      ).then(res => {
        console.log('getListUlData=>', res)
        this.mobileFlashSaleNewItems =
          res.data.data.grabTogether.mobileFlashSaleNewItems
        this.endTime = res.data.data.grabTogether.endDate
      })
    }
  },

  mounted() {
    // console.log(this.mobileFlashSaleNewItems)
    this.getListUlData()
  }
}
</script>

<style lang="scss" scoped>
.grabTogether {
  background: #fff;
  margin-bottom: 0.1rem;
  .grabTop {
    width: 100%;
    height: 0.46rem;
    padding: 0px 0.85rem 0px 1.15rem;
    background: url('../../../assets/icon_hot.png') no-repeat #fff;
    background-size: 0.9rem;
    line-height: 0.46rem;
    a {
      position: absolute;
      right: 0.1rem;
    }
  }
}
.ypc-swipe-items-wrap {
  img {
    width: 100%;
    height: 1.3rem;
  }
}
</style>
