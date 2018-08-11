<template>
  <div style="" v-if="0">
    <div class="pro_group_top">
      <ul id="pro_group_scroll">
        <li class="active" v-for="(key, i) in packageMod.lhyy_comboinfo" :key="i">
          <p class="pro_name">【套餐一】提升男人性能力 享受性福生活</p>
        </li>
      </ul>
    </div>
    <div class="pro_group_list">
      <ul class="list_ul">
        <li>
          <div class="img_box"><img src="" alt=""></div>
          <p class="pro_name">金戈 枸橼酸西地那非片（伟哥） 50mg*20片</p>
          <p class="price">
            <span>¥449.00</span>
            <i>x1</i>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packageMod',
  data() {
    return {
      packageMod: []
    }
  },
  methods: {
    getPackageModData() {
      this.$http({
        method: 'post',
        url: 'https://gateway.fangkuaiyi.com/product/v1/combo/getcombo',
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
          timestamp: Date.now(),
          signature: '****',
          siteid: 9,
          itemCode: 50094437,
          width: window.innerWidth,
          os: 'iphone'
        }
      }).then(res => {
        //lhyy_comboinfo
        this.packageMod = res.data.data
        // console.log('packageMod=>', res.data.data)
        // console.log(this.getOS())
      })
    },
    getOS() {
      let os = navigator.appVersion
      // console.log('getOS=>', os)
      if (os.indexOf('iPhone') > 0) {
        return 'iphone'
      }
      return 'android'
    }
  },
  mounted() {
    this.getPackageModData()
  }
}
</script>

<style lang="scss" scoped>
</style>


