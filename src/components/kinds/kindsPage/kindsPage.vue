<template>
  <div class="all-kinds">
    <div class="left-kinds">
      <ul>
        <li :class="{'active':index === idx}" v-for="(kind,idx) in kinds" :key="kind.id" @click="index = idx ; kindsId = kind.id">{{kind.name}}</li>
      </ul>
    </div>
    <div class="right-kinds">
      <listBanner :carousel="carousel"></listBanner>
      <listsKinds :key="detailsData.id" :detailsData="detailsData"></listsKinds>
    </div>
  </div>
</template>   

<script>
import Vue from 'vue'
import http from '../../../lib/httpclient'
import Swiper from 'swiper'

import listBanner from './listBanner.vue'
import listsKinds from './listsKinds.vue'

export default {
  name: 'all-kinds',
  components: {
    listBanner,
    listsKinds
  },
  data() {
    return {
      kinds: [],
      index: 0,
      kindsId: 1001447,
      carousel: [],
      detailsData: []
    }
  },
  methods: {
    getkinds() {
      http
        .post(
          'mobile/category/getItemFirstCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533112582992&signature=****&siteid=9',
          {
            categorytype: 1,
            clientAppVersion: 111,
            fatherid: -1,
            phoneType: 'iPhone',
            searchtype: 1
          }
        )
        .then(res => {
          this.kinds = res.data
          this.kindsId = this.kinds[0].id
        })
    },
    getKindsDetails() {
      this.$http(
        'http://gateway.fangkuaiyi.com/mobile/category/getItemSecondCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533123075993&signature=****&siteid=9',
        {
          type: 'post',
          params: {
            demandcartkey: '33ea5d0c4882727563c8aa95c79d21d3',
            cartkey: '33ea5d0c4882727563c8aa95c79d21d3',
            provinceid: 20,
            province: 20,
            provincename: '广东',
            tradername: 'yw_app',
            trader: 'h5',
            closesignature: 'yes',
            signature_method: 'md5',
            timestamp: Date.now,
            signature: '****',
            siteid: 9,
            categorytype: 2,
            fatherid: this.kindsId,
            searchtype: 2
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then(res => {
        this.carousel = res.data.data.categoryBanners
        this.detailsData = res.data.data.categoryinfo[0]
      })
    }
  },
  watch: {
    kindsId() {
      this.getKindsDetails()
    }
  },
  created() {
    this.getkinds()
    this.getKindsDetails()
  }
}
</script>

<style lang="scss" scoped>
.all-kinds {
  flex: 1;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  .left-kinds {
    width: 25%;
    overflow: auto;
    li {
      height: 0.46rem;
      width: 100%;
      background: #f6f6f6;
      border-bottom: 0.01rem solid #ddd;
      border-right: 0.01rem solid #dfdfdf;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.14rem;
      color: #333;
      border-left: 0.02rem solid #f6f6f6;
    }
    .active {
      color: #f66;
      border-left: 0.02rem solid #f66;
      background: #fff;
      border-right: 0;
    }
  }
  .right-kinds {
    width: 75%;
    padding: 0.08rem;
    overflow: hidden;
    .swiper-slide {
    }
    img {
      width: 100%;
      // width: 0.56rem;
      // background: #ccc;
      // height: 0.56rem;
    }
  }
}
</style>
