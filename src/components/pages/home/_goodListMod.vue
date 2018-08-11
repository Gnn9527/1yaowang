<template>
  <div class="good_topic">
    <div class="good_list" v-for="(item, i) in goodsListData" :key="i">
      <div class="default_img">
        <a href="javascript:;"><img :src="item.picUrl" lazy="loaded"></a>
      </div>
      <listUl :data="item.goodProducts"></listUl>
    </div>
  </div>
</template>

<script>
// components
import listUl from './_list_ul'
export default {
  name: 'homeGoodsList',
  data() {
    return {
      goodsListData: []
    }
  },
  components: {
    listUl
  },
  methods: {
    getGoodsList() {
      this.$http(
        'http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533434907967&signature=****&siteid=9',
        {
          type: 'get'
        }
      ).then(res => {
        this.goodsListData = res.data.data.goodTopic
        // console.log(res.data.data.goodTopic)
        console.log('homeGoodsList=>', this.goodsListData)
      })
    }
  },

  mounted() {
    this.getGoodsList()
  }
}
</script>

<style lang="scss" scoped>
.good_list {
  padding: 10px 10px 0 10px;
  background: #fff;
  img {
    width: 3.55rem;
    height: 2.35rem;
  }
}
</style>



