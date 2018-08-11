<template>
  <div class="tab2">
    <ul>
      <li v-for="(obj,i) in search" :key="obj.id" :class="{'active' : index === i && status }" @click="find(obj,i,clear)">
        <span>{{obj.name}}</span>
        <icon v-if="obj.name" :name=obj.icon></icon>
      </li>
    </ul>
    <div class="select_container">
      <div class="se-con1" v-if="index === 1 && status1">
        <div class="des">
          <!-- <span
                v-if="tab2Kinds && obj.typeId" 
                v-for="obj in tab2Kinds"
                :key=obj.typeId
                :class="{'active' : kindsStatus}"
                @click="getkinds(obj);">{{obj.name}}</span>                 -->

          <el-checkbox-group v-model="allKinds" size="small">
            <el-checkbox v-for="obj in tab2Kinds" :key=obj.typeId :label="obj">{{obj.name}}</el-checkbox>
          </el-checkbox-group>
        </div>

        <div class="choose">
          <span class="reset" @click="allKinds = []">重置</span>
          <span class="determine" @click="choose1(clear)">确定</span>
        </div>
      </div>
      <div class="se-con1" v-if="index === 2 && status2">
        <div class="des">

          <el-checkbox-group v-model="allKinds2" size="small">
            <el-checkbox v-for="obj in tab2Kinds" :key=obj.id :label="obj">{{obj.name}}</el-checkbox>
          </el-checkbox-group>

          <!-- <span 
                    v-if="tab2Kinds && obj.id"
                    v-for="obj in tab2Kinds"
                    :key="obj.id"
                    >{{obj.name}}</span> -->
        </div>

        <div class="choose">
          <span class="reset" @click="allKinds2 = []">重置</span>
          <span class="determine" @click="choose2(clear)">确定</span>
        </div>
      </div>
      <div class="se-con2" v-if="index === 3 && status">
        <div class="des">
          <span v-if="tab2Kinds && typeof Number(obj.max) == 'number'" v-for="(obj,i) in tab2Kinds" :key="obj.name" @click="pricestart = obj.min;priceend = obj.max;price(obj,i,clear);">{{obj.name}}</span>
        </div>
        <div class="choose">
          <div>
            <input type="text" v-model="pricestart" placeholder="最低价" />
            <span>~</span>
            <input type="text" v-model="priceend" placeholder="最高价" />
          </div>
          <span class="price_btn" @click="price">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../../lib/httpclient'
export default {
  data() {
    return {
      search: [
        {
          id: 1,
          name: '自营'
        },
        {
          id: 2,
          name: '促销',
          icon: 'caret-down'
        },
        {
          id: 3,
          name: '品牌',
          icon: 'caret-down'
        },
        {
          id: 4,
          name: '价格',
          icon: 'caret-down'
        }
      ],
      tab2Data: [],
      tab2Kinds: [],
      index: -1,
      status: false,
      status1: false,
      status2: false,
      kindsStatus: false,
      req: this.$store.state.commons.req,
      allKinds: [],
      allKinds2: [],
      proTypeId: '',
      proId: '',
      pagesize: 10,
      pageindex: 1,
      pricestart: 0,
      priceend: 0,
      clear: true
    }
  },
  methods: {
    find(obj, i, clear) {
      this.status = !this.status
      this.index = i
      if (obj.id === 2) {
        this.status1 = !this.status1
        this.tab2Kinds = this.tab2Data.data.promotionFilters
      } else if (obj.id === 3) {
        this.status2 = !this.status2
        this.tab2Kinds = this.tab2Data.data.brands
      } else if (obj.id === 4) {
        this.tab2Kinds = this.tab2Data.data.priceRanges
      } else {
        if (this.status1 || this.status2) {
          if (clear) {
            this.$store.commit({ type: 'DELETE', clear: clear })
          }
          this.$store.dispatch('getLists', {
            pagesize: 10,
            pageindex: 1,
            venderid: obj.id,
            categoryid: this.req.id,
            heguiKeyword: this.req.name,
            sort: this.req.sort
          })
        }
      }
    },
    choose1(clear) {
      if (clear) {
        this.$store.commit({ type: 'DELETE', clear: clear })
      }
      this.status = false
      this.status1 = false
      if (this.allKinds.length > 0) {
        let pro = ''
        let proName = ''
        this.allKinds.forEach(item => {
          pro += ',' + item.typeId
          proName += ',' + item.name
        })
        pro = pro.substring(1)
        proName = proName.substring(1)
        this.proTypeId = pro
        this.search[1].name = proName

        this.$store.dispatch('getLists', {
          pagesize: this.pagesize,
          pageindex: this.pageindex,
          categoryid: this.req.id,
          heguiKeyword: this.req.name,
          sort: this.req.sort,
          promotiontype: pro
        })
      } else {
        this.status1 = false
        this.proTypeId = 0
        this.search[1].name = '促销'
        this.$store.dispatch('getLists', {
          pagesize: this.pagesize,
          pageindex: this.pageindex,
          categoryid: this.req.id,
          heguiKeyword: this.req.name,
          sort: this.req.sort,
          promotiontype: 0
        })
      }
    },
    choose2(clear) {
      if (clear) {
        this.$store.commit({ type: 'DELETE', clear: clear })
      }
      this.status = false
      this.status2 = false
      if (this.allKinds2.length > 0) {
        let pro = ''
        let proName = ''
        this.allKinds2.forEach(item => {
          pro += ',' + item.id
          proName += ',' + item.name
        })
        pro = pro.substring(1)
        proName = proName.substring(1)
        this.proId = pro
        this.search[2].name = proName

        this.$store.dispatch('getLists', {
          pagesize: this.pagesize,
          pageindex: this.pageindex,
          categoryid: this.req.id,
          heguiKeyword: this.req.name,
          sort: this.req.sort,
          promotiontype: this.proTypeId || 0,
          brands: this.proId
        })
      } else {
        this.status2 = false
        this.search[2].name = '品牌'
        this.$store.dispatch('getLists', {
          pagesize: this.pagesize,
          pageindex: this.pageindex,
          categoryid: this.req.id,
          heguiKeyword: this.req.name,
          sort: this.req.sort,
          promotiontype: this.proTypeId || 0,
          brands: ''
        })
      }
    },
    price(obj, i, clear) {
      if (clear) {
        this.$store.commit({ type: 'DELETE', clear: clear })
      }
      this.search[3].name = this.pricestart + '~' + this.priceend
      this.status = false
      this.$store.dispatch('getLists', {
        pagesize: this.pagesize,
        pageindex: this.pageindex,
        categoryid: this.req.id,
        heguiKeyword: this.req.name,
        sort: this.req.sort,
        promotiontype: this.proTypeId || 0,
        brands: this.proTypeId,
        pricestart: this.pricestart,
        priceend: this.priceend
      })
    }
  },
  created() {},
  mounted() {
    http
      .post(
        'search/filter/?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533448138642&signature=****&siteid=9',
        {
          categoryid: this.$route.query.id
        }
      )
      .then(res => {
        this.tab2Data = res
      })
  }
}
</script>

<style lang="scss" scoped>
.tab2 {
  .active {
    border: 1px solid #f66;
    color: #f66;
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    height: 0.45rem;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    li {
      width: 23%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f1f1f1;
      border-radius: 0.1rem;
      color: #333;
      font-size: 0.14rem;
      span {
        display: inline-block;
        width: 0.4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      svg {
        width: 0.14rem;
        height: 0.14rem;
        // margin-left: 0.1rem;
        color: #bbb;
      }
    }
  }
  .select_container {
    .se-con1 {
      display: flex;
      flex-direction: column;
      .des {
        div {
          max-height: 1.9rem;
          overflow-x: hidden;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 0.2rem;
          border-bottom: 1px solid #dfdfdf;
          > label {
            // padding: 0 0.2rem;
            display: flex;
            height: 0.4rem;
            width: 45%;
            //   background: pink;
            justify-content: center;
            align-items: center;
            margin: 0;
            margin-bottom: 0.1rem;
            display: flex;
            justify-content: space-around;
          }
        }
      }
      .choose {
        width: 100%;
        height: 0.45rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dfdfdf;
        align-items: center;
        span {
          width: 50%;
          height: 100%;
          font-size: 0.14rem;
          display: flex;
          color: #333;
          justify-content: center;
          align-items: center;
          // padding: 0 0.2rem;
        }
        .determine {
          background: #f66;
          color: #fff;
        }
      }
    }
    .se-con2 {
      .des {
        display: flex;
        flex-direction: column;
        padding: 0 0.2rem;
        span {
          display: flex;
          height: 0.45rem;
          align-items: center;
          font-size: 0.14rem;
        }
      }
      .choose {
        padding: 0 0.26666666666666666rem;
        background: #fff;
        border-top: 1px solid #e7e7e7;
        display: flex;
        justify-content: space-between;
        height: 0.5rem;
        align-items: center;
        border-bottom: 1px solid #e7e7e7;
        div {
          height: 100%;
          display: flex;
          align-items: center;
          input {
            width: 1rem;
            height: 0.35rem;
            text-indent: 0.21333333333333335rem;
            border-radius: 0.13333333333333333rem;
            background: #f1f1f2;
            border: none;
          }
        }

        > span {
          background: #f66;
          height: 0.35rem;
          width: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.1rem;
          color: #fff;
        }
      }
    }
  }
}
</style>
