<template>
    <div class="mid-footer">
        <ul>
            <li v-for="(nav,i) in navLists" :key="i">
                <router-link :to=nav.path tag="div" class="tab-item">
                    <icon :name="nav.icon"></icon>
                    <span>{{nav.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navLists: [
        {
          path: "/",
          icon: "home",
          name: "首页"
        },
        {
          path: "/listKinds",
          icon: "user-md",
          name: "找药"
        },
        {
          path: "/cart",
          icon: "shopping-cart",
          name: "购物车"
        },
        {
          path: "/mine",
          icon: "user",
          name: "我的"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.mid-footer {
  width: 100%;
  height: 0.49rem;
  background: #fff;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    li {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
      .tab-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        svg{
          width: 0.16rem;
          height: 0.16rem;
          margin-bottom: 0.02rem;
        }
        span {
          font-size: 0.14rem;
        }
      }
      .router-link-exact-active{
        color: #f66;  
      }
    }
  }
}
</style>
