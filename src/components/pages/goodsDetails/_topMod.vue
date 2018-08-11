<template>
  <div class="pro_header rel">
    <a href="javascript:;" @click="$router.go(-1);returns(clear)" class="common_left_btn">
      <icon name="angle-left"></icon>
    </a>
    <ul class="common_tt_tab">
      <li @click="curStatus=i" v-for="(item, i) in commonTab" :key="i" :class="{cur:curStatus===i}">{{ item }}</li>
    </ul>
    <!---->
    <div class="common_more" @click="toggle_nav_bg = !toggle_nav_bg">
      <icon name="ellipsis-h"></icon>
    </div>
    <div class="toggle_nav_bg" v-if="toggle_nav_bg">
      <div id="toggleNav" class="toggle_nav">

        <a href="javascript:;" :key="i" v-for="(item, i) in toggle_navTab" @click="$router.push({path:item.routerPath})">
          <i class=""></i>{{ item.titel }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topMod',
  data() {
    return {
      curStatus: 0,
      commonTab: ['商品', '详情', '问答'],
      toggle_nav_bg: false,
      toggle_navTab: [
        { titel: '首页', routerPath: '/' },
        { titel: '分类', routerPath: 'listKinds' },
        { titel: '购物车', routerPath: 'cart' },
        { titel: '需求清单', routerPath: 'goodsDetails' },
        { titel: '我的', routerPath: 'mine' }
      ],
      clear: true
    }
  },
  methods: {
    returns(clear) {
      if (clear) {
        // this.$store.commit({type:'DELETE',clear:clear})
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.pro_header {
  height: 0.45rem;
  padding: relative;
  .common_left_btn {
    position: absolute;
    left: 0;
    svg {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .common_tt_tab {
    li {
      display: inline-block;
      width: 0.5rem;
      height: 0.4rem;
      font-size: 0.16rem;
      line-height: 0.45rem;
      position: relative;
    }
  }
  .cur::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 80%;
    margin-left: -40%;
    height: 1px;
    background: #ff6666;
    color: #ff6666;
  }
  .common_more {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 0.17rem;
    margin-right: 0.17rem;
  }
  .toggle_nav_bg {
    background: #cccccc3b;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 500;
    .toggle_nav {
      width: 1.35rem;
      height: 1.84rem;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 0.05rem;
      position: absolute;
      right: 0.08rem;
      top: 0.1rem;
      a {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 0.01rem #ccc solid;
        font-size: 0.15rem;
      }
    }
    .toggle_nav::before {
      display: inline-block;
      content: '';
      width: 0;
      padding: 0;
      border: 0.08rem solid transparent;
      border-bottom-color: #fff;
      position: absolute;
      right: 0.11rem;
      top: -0.16rem;
    }
  }
}
</style>


