<template>
  <div class="pro_part">
    <div class="pro_title">
      <h1>
        <span class="icon_ziying"></span>
        {{ data.product_info.productName }}
      </h1>
    </div>
    <p class="pro_price">
      <span>¥{{ data.product_info.pcSalePrice }}</span>
      <i class="pro_tag pro_tel" style="display: none;">手机专享价</i>
      <i class="pro_tag" style="display: none;">
        节省0元
      </i>
    </p>
    <p class="pro_note">{{ data.supplier }}</p>
    <p class="pro_note">
      <i>批准文号：</i>
      {{ data.product_info.approvalnum }}
      <span>(国家食药局查询)</span>
    </p>
    <p class="pro_label">
      <span v-for="(key, i) in data.service_list" :key="i">{{ key.service_desc }}</span>
    </p>
  </div>
</template>
 
<script>
export default {
  name: 'goodsDescription',
  props: ['data']
}
</script>

<style lang="scss" scoped>
.pro_part {
  width: 100%;
  height: 2.24rem;
  padding: 0 0 0 0.15rem;
  background: #fff;

  .pro_title {
    padding: 0.1rem 0.1rem 0.1rem 0;
    border-bottom: 0.01rem solid #ccc;
    position: relative;
    .icon_ziying {
      display: block;
      width: 0.34rem;
      height: 0.22rem;
      background: url('../../../assets/ziying.png') no-repeat left center;
      background-size: auto 0.16rem;
      position: absolute;
      left: 0;
    }
    h1 {
      text-align: left;
      padding-left: 0.36rem;
      font-size: 0.16rem;
      line-height: 0.24rem;
    }
  }
  .pro_price {
    font-size: 0.24rem;
    line-height: 0.26rem;
    padding: 0.1rem 0.15rem 0.1rem 0;
    color: #ff6666;
    text-align: left;
  }
  .pro_note {
    font-size: 0.14rem;
    line-height: 0.2rem;
    text-align: left;
    color: #808080;
    padding: 0 0.1rem 0.1rem 0;
    span {
      padding: 0 0.05rem;
      color: #3987f4;
    }
  }
  .pro_label {
    padding: 0 0.15rem 0.1rem 0;
    text-align: left;
    border-bottom: 1px #ccc solid;
    span {
      background: url('../../../assets/icon_gou.png') no-repeat;
      background-size: 0.16rem;
      background-position: left;
      font-size: 0.13rem;
      margin-right: 0.2rem;
      padding-left: 0.2rem;
    }
  }
}
</style>


