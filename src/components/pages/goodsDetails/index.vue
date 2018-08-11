<template>
  <div class="pro_content">
    <topMod></topMod>
    <div v-if="goodsId">
      <div class="pro_sider">
        <detBanner v-if="goodsDetailsMod.picInfo" :data="goodsDetailsMod.picInfo"></detBanner>
        <p v-if="goodsDetailsMod.product_info">{{ goodsDetailsMod.product_info.gift }}</p>
      </div>
      <div>
        <goodsDescription v-if="goodsDetailsMod.service_list" :data="goodsDetailsMod"></goodsDescription>
        <!-- <> -->
      </div>
      <div>
        <!-- <packageMod></packageMod> -->
      </div>
    </div>
    <addCart :data="goodsDetailsMod.product_info"></addCart>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import topMod from './_topMod.vue'
import detBanner from './_detBanner.vue'
import goodsDescription from './_goodsDescription.vue'
import packageMod from './_packageMod.vue'
import addCart from './_addCart.vue'

export default {
  name: 'goodsDetails',
  data() {
    return {
      goodsDetailsMod: [],
      goodsId: this.$route.query.goodsId
    }
  },
  components: {
    topMod,
    detBanner,
    goodsDescription,
    packageMod,
    addCart
  },
  computed: {},
  methods: {
    getGoodsDetailsData() {
      this.$http({
        method: 'post',
        url:
          'https://gateway.fangkuaiyi.com/product/v1/product/getProductBaseInfo',
        params: {
          cartkey: '10b9977f45d9c8ef6e584059735c489b',
          demandcartkey: '10b9977f45d9c8ef6e584059735c489b',
          provinceid: 20,
          province: 20,
          provincename: '广东',
          tradername: 'yw_app',
          trader: 'h5',
          closesignature: 'yes',
          signature_method: 'md5',
          timestamp: Date.now(), //post time
          signature: '****',
          siteid: 9,
          itemId: this.goodsId, //goods id
          width: window.innerWidth //
        }
      }).then(res => {
        this.goodsDetailsMod = res.data.data
        //picInfo => banner jpg
        console.log('getGoodsDetailsData=>', this.goodsDetailsMod)
        console.log('getGoodsDetailsData=>', this.goodsId)
      })
    }
  },

  mounted() {
    this.getGoodsDetailsData()
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.pro_content {
  background: #f9f9f9;
  .pro_sider {
    background: #fff;
    margin-bottom: 0.05rem;
    p {
      padding: 0.1rem 0.15rem;
      text-align: left;
      font-size: 0.14rem;
      color: #ff6666;
    }
  }
}
</style>




