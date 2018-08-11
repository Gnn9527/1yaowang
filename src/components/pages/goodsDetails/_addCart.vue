<template>
  <div class="pro_bar pro_bar_tab">
    <a href="javascript:void(0)" class="pro_tab_item right_border">
      <div>
        <div>
          <i class="icon iconfont icon_kefu"></i>
          <span class="tab_label">客服</span>
        </div>
        <div class="service_con" style="display: none">
          <span v-for="(key, i) in service_con" :key="i" class="service_unit">医生</span>
        </div>
      </div>
    </a>
    <a href="javascript:void(0)" class="pro_tab_item right_border">
      <i class="icon iconfont icon_xingxing1" style="color: rgb(102, 102, 102);"></i>
      <span class="tab_label">收藏</span>
    </a>
    <a href="javascript:void(0)" class="pro_tab_item">
      <span id="selfCartIcon" class="icon_img icon_shopcar"></span>
      <span class="tab_label rel" @click="$router.push({path:'cart'})">购物车
        <span class="goodsListAllNum">{{ goodsListAllNum }}</span>
      </span>
      <i class="tab_badge" style="display: none;"></i>
      <i class="tab_badge" style="display: none;">99+</i>
    </a>
    <!---->
    <div class="pro_tab_item pro_add_car">
      <span @click="addCkie()">加入购物车</span>
    </div>
  </div>

</template>

<script>
import { Toast } from 'mint-ui'
import router from '../../../router'
export default {
  name: 'addCart',
  data() {
    return {
      service_con: ['医生', '售前', '企业采购', '药师', '售后', '意见反馈'],
      goodslist: JSON.parse(this.$cookie.get('buyCartData')) || []
    }
  },
  props: ['data'],
  computed: {
    goodsListAllNum() {
      return this.$store.state.commons.shoplistNum
    }
  },
  methods: {
    addCkie() {
      let goodsId = this.data.itemId
      let has = this.goodslist.some(function(_goods) {
        let res = _goods.goodsId === goodsId
        if (res) {
          _goods.qty++
        }
        return res
      })
      if (!has) {
        let goods = {
          goodsId: this.data.itemId,
          productName: this.data.productName,
          price: this.data.pcSalePrice,
          mainimg1: this.data.mainimg1,
          qty: 1
        }
        this.goodslist.push(goods)
      }
      this.$cookie.set('buyCartData', JSON.stringify(this.goodslist))
      this.$store.commit('SHOPLISTNUM', this.goodslist)
      console.log('buyCartData=>', this.$store.state.commons.shoplistNum)
      Toast('加入购物车成功！')
    }
  },
  mounted() {
    this.$store.commit('SHOPLISTNUM', this.goodslist)
  }
}
</script>

<style lang="scss" scoped>
.pro_bar_tab {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.55rem;
  display: flex;
  line-height: 0.55rem;
  font-size: 0.16rem;
  border-top: 0.01rem #ccc solid;
  border-left: 0.01rem #ccc solid;
  background: whitesmoke;
  z-index: 10;
}
.pro_tab_item {
  flex: 20%;
  text-align: center;
}
.pro_add_car {
  background: #ff6666;
  flex: 40%;
  color: #fff;
}
.goodsListAllNum {
  position: absolute;
  top: -30px;
  left: 32px;
  font-size: 12px;
  color: #fff;
  display: block;
  background: #ff6666;
  border-radius: 50%;
  line-height: 12px;
  padding: 5px;
  box-shadow: -1px 11px 34px 0px #333;
}
</style>