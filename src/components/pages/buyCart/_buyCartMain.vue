<template>
  <div>
    <div v-if="buyCartData.length" class="buyCartMod">
      <div style="margin: 40px 0;"></div>
      <div class="cart_pro" v-for="(key, i) in buyCartData" :key="i">
        <div class="pro_img_box rel">
          <img :src="key.mainimg1" class="pro_img">
        </div>
        <div class="pro_det">
          <h2 class="pro_name">{{ key.productName }}</h2>
          <div class="price_count ">

            <p @click="price_count(i,'-')">
              <icon name="caret-left"></icon>
            </p>

            <input type="tel" class="input_nub ftc" :value="key.qty">

            <p @click="price_count(i,'+')">
              <icon name="caret-right"></icon>
            </p>

          </div>
          <div class="disF jc-sa">
            <span class="price">¥{{ key.price }}</span>
            <span class="delete_btn" @click="delShop(i)">删除</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="buyCartMod_null">
      <p>空空如也的购物车</p>
      <router-link :to="{path:'listKinds'}" class="goListKinds">去看看</router-link>
    </div>
    <div class="buyCartMod_footer"></div>
    <div></div>
  </div>
</template>

<script>
import { Checklist } from 'mint-ui'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'buyCartMain',
  data() {
    return {
      buyCartData: window.eval(this.$cookie.get('buyCartData')) || [],
      shoplistNum: 0,
      shopAllPic: 0
    }
  },
  computed: {},
  methods: {
    price_count(n, status) {
      console.log('price_count=>', n, status)
      if (status === '+') {
        this.buyCartData[n].qty === 10
          ? (this.buyCartData[n].qty = 10)
          : this.buyCartData[n].qty++
      } else if (status === '-') {
        this.buyCartData[n].qty === 1
          ? (this.buyCartData[n].qty = 1)
          : this.buyCartData[n].qty--
      }
      this.$cookie.set('buyCartData', JSON.stringify(this.buyCartData))
      //  修改状态
      this.$store.commit('SHOPLISTNUM', this.buyCartData)
      console.log(this.$store.state.commons.shoplistNum)
    },
    delShop(idx) {
      this.buyCartData.splice(idx, 1)
      this.$cookie.set('buyCartData', JSON.stringify(this.buyCartData))
      //  修改状态
      this.$store.commit('SHOPLISTNUM', this.buyCartData)
    }
  },
  computed: {},
  mounted() {
    this.$store.commit('SHOPLISTNUM', this.buyCartData)
  }
}
</script>

<style lang="scss" scoped>
.buyCartMod {
  position: relative;
  padding: 10px 10px 0 10px;
  .cart_pro {
    display: flex;
    height: 1.04rem;
    border-bottom: 0.01rem solid salmon;
    .pro_det {
      width: 100%;
      display: flex;
      flex-direction: column;

      justify-content: space-around;
      .price_count {
        display: flex;
        justify-content: center;
        .input_nub {
          padding: 0 10px;
          width: 1rem;
        }
      }
    }
  }
  img {
    // position: absolute;
    top: 0;
    left: 0.4rem;
    width: 0.8rem;
    height: 0.8rem;
  }
}
.buyCartMod_footer {
  width: 100%;
  height: 1.04rem;
}
.buyCartMod_null {
  margin: 0.5rem;
  p {
    line-height: 1rem;
    color: #f60;
    font-size: 0.2rem;
  }
  .goListKinds {
    border: #f60 1px solid;
    width: 0.5rem;
    height: 25px;
    border-radius: 0.05rem;
    display: block;
    line-height: 0.25rem;
    margin: auto;
  }
}
</style>

