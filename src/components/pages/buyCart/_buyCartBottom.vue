<template>
  <div class="buyCartBottm">
    <div class="buyCartBottm_box">
      <div class="buyCartsAllChecbox"></div>
      <div class="buyCartsShopPrice">
        <p>合计：￥
          <span>{{ goodsAllPrice }}</span>
        </p>
        <p>
          不含运费，已优惠¥{{'0.00'}}
        </p>
      </div>
      <div class="buyCartsShopNum">
        <span>去结算</span>
        <span>({{ goodsListAllNum }})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buyCartBottm',
  data() {
    return {
      goodsAllPrice: 0
    }
  },
  computed: {
    goodsListAllNum() {
      this.shopAllPic()
      return this.$store.state.commons.shoplistNum
    }
  },
  methods: {
    shopAllPic() {
      let goodsList = this.$store.state.commons.shopList
      let goodsPic = 0
      for (var key of goodsList) {
        goodsPic += key.price * key.qty
      }
      this.goodsAllPrice = goodsPic.toFixed(2)
    }
  },
  mounted() {
    this.$store.commit(
      'SHOPLISTNUM',
      JSON.parse(this.$cookie.get('buyCartData'))
    ),
      this.shopAllPic()
  }
}
</script>

<style lang="scss" scoped>
.buyCartBottm {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: rgb(245, 241, 241);
  div {
    height: 100%;
  }
  height: 0.56rem;
  .buyCartBottm_box {
    display: flex;
    flex-direction: row;
    border-top: 0.01rem solid #cccccc;
    .buyCartsAllChecbox {
      flex: 15%;
    }
    .buyCartsShopPrice {
      flex: 55%;
      text-align: right;
      p {
        line-height: 0.25rem;
        font-size: 0.12rem;
      }

      p:nth-of-type(1) {
        color: #ff6666;
        span {
          font-size: 0.2rem;
        }
      }
      p:nth-of-type(2) {
        color: #999;
      }
    }
    .buyCartsShopNum {
      flex: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #ff9e81;
      font-size: 0.18rem;
      color: #fff;
    }
  }
}
</style>
