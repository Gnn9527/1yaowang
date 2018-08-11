<template>
  <div class="dataLists">
    <ul class="lists" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li @click="goGoodsList(list)" v-for="list in detailsLists" :key="list.id">
        <div class="image">
          <img v-lazy="list.img">
        </div>
        <div class="desc">
          <div class="title">
            <span class="flag" v-if="list.tcFlag == 1">自营</span>
            <span class="tit">
              <!-- <span>{{list.brandName}}</span> -->
              {{list.name}}</span>
          </div>
          <div class="ask">
            <p class="price">￥ {{list.pcSalePrice}}</p>
            <span class="commons" v-if="list.commons">{{list.commons}}条问答</span>
            <span class="discuss" v-if="list.userGrade">{{list.userGrade}}条评论</span>
            <span class="favorable " v-if="list.goodsUserGradeRate">好评率{{list.goodsUserGradeRate}}%</span>
          </div>
        </div>
      </li>
    </ul>
    <p v-if="detailsLists">没有找到相关的商品，试试咨询药师帮您寻找商品</p>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui'
export default {
  data() {
    return {
      pageindex: 0,
      pagesize: 10
    }
  },
  computed: {
    detailsLists() {
      return this.$store.state.commons.dataLists
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      this.pageindex += 1
      // console.log(this.$store.state.commons.httpStatus)
      if (this.$store.state.commons.httpStatus == '001001000002') {
        return false
      } else {
        // console.log(666)

        this.$store.dispatch({
          type: 'getLists',
          categoryid: this.$route.query.id,
          heguiKeyword: this.$route.query.heguiKeyword,
          promotiontype: '',
          sort: '',
          fatherid: '',
          clientAppVersion: '',
          pageindex: this.pageindex,
          pagesize: 10
        })
      }
    },
    goGoodsList(list) {
      this.$router.push({
        path: 'goodsDetails',
        query: { goodsId: list.itemId }
      })
    }
  },
  mounted() {
    // console.log(this.detailsLists);
  }
}
</script>

<style lang="scss" scoped>
.dataLists {
  margin-top: 1.32rem;
  .lists {
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.15rem;
      border-bottom: 1px solid #e7e7e7;
      height: 1.5rem;
      align-items: center;
      .image {
        width: 30%;
        img {
          width: 100%;
        }
      }
      .desc {
        width: 63%;
        height: 1.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        line-height: 0.28rem;
        font-size: 0.14rem;
        .title {
          .flag {
            border: 1px solid #58bc58;
            font-size: 0.12rem;
            border-radius: 0.05rem;
          }
        }
        .price {
          color: #f66;
          font-size: 0.16rem;
        }
        .commons {
          color: aqua;
        }
        .discuss {
          color: #aaa;
          margin-right: 0.1rem;
        }
        .favorable {
          color: #aaa;
        }
      }
    }
  }
  p {
    line-height: 0.4rem;
  }
}
</style>

