<template>
    <div ref="req" class="detailsFilter">
        <div class="filter">
          <ul>
            <li v-for="(obj,i) in data" :key=obj.id  :class="{'active' : index === i && (sorts || kinds)}" 
                @click="index = i;replace(i)">
                <span>{{obj.name}}</span>
                <icon :name="obj.icon"></icon>
            </li>
            <li>
                <icon name="list-ul"></icon>
                <span>列表</span>
            </li>
            <li>
                <icon name="filter"></icon>
                <span>筛选</span>
            </li>
          </ul>
        </div>
       
        <div class="select" >
            <div class="kinds" v-if="categories && kinds">
                <ul class="left_select">
                <li v-for="obj in categories" :key="obj.id" >{{obj.name}}</li>
            </ul>
            <ul class="right_select">
                <li :class="{'active' : obj.name == req.name}" 
                v-for="obj in categories[0].children" 
                :key="obj.id"
                @click="change(obj,clear);kinds = false">{{obj.name}}</li>
            </ul>
            </div>
            <div class="allsorts" v-if="sorts">
                <ul>
                    <li v-for="(item,i) in sortsList" 
                    :key="i"
                    :class="{'active' : item.name === data[1].name}"
                    @click="data[1].name = item.name;
                    sorts = false;
                    changeData(item.sort,clear)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import route from "../../../router";
export default {
  data() {
    return {
      keys: "",
      data: [
        {
          id: 1,
          name: this.$route.query.heguiKeyword,
          icon: "caret-down"
        },
        {
          id: 2,
          name: "综合排序",
          icon: "caret-down"
        }
      ],
      sortsList: [
        {
          name: "综合排序",
          sort: 0
        },
        {
          name: "销量排序",
          sort: 1
        },
        {
          name: "好评排序",
          sort: 3
        },
        {
          name: "价格从低到高",
          sort: 2
        },
        {
          name: "价格从高到低",
          sort: 5
        },
        {
          name: "最新上架",
          sort: 4
        }
      ],
      status: false,
      index: -1,
      kinds: false,
      sorts: false,
      req: {
        name: this.$route.query.heguiKeyword,
        sort: 0,
        id: this.$route.query.id
      },
      clear:true
    };
  },
  computed: {
    categories() {
      return this.$store.state.commons.categories;
    }
  },
  watch: {
    req: {
      handler: function(val, oldVal) {
        this.$store.commit({
          type: "saveKinds",
          req: val
        });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    replace(i) {
      if (i === 0) {
        this.kinds = !this.kinds;
        this.sorts = false;
      } else {
        this.sorts = !this.sorts;
        this.kinds = false;
      }
    },
    change(obj,clear) {
      this.req.name = obj.name;
      this.data[0].name = obj.name;
      console.log(obj.id);
      this.req.id = obj.id;
      this.$store.dispatch("getLists", {
        categoryid: this.req.id,
        heguiKeyword: this.req.name,
        sort: this.req.sort
      });
      if(clear){
          this.$store.commit({type:'DELETE',clear:clear})
      }
    },
    changeData(sort,clear) {
      if(clear){
          this.$store.commit({type:'DELETE',clear:clear})
      }
      this.req.sort = sort;
      this.$store.dispatch("getLists", {
        categoryid: this.req.id,
        heguiKeyword: this.req.name,
        sort: sort
      });
    }
  },
  mounted() {
    this.keys = this.$route.query.heguiKeyword;
    this.$store.dispatch({
      type: "filterList",
      categoryid: this.req.id
    });
  }
};
</script>

<style lang="scss" scoped>
.detailsFilter {
  .active {
    color: #f66;
  }
  .filter {
    position: relative;
    height: 0.45rem;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 0.15rem;
      height: 100%;
      align-items: center;
      border-top: 1px solid #dadada;
      border-bottom: 1px solid #dadada;
      li {
        display: flex;
        align-items: center;
        font-size: 0.14rem;
        svg {
          width: 0.14rem;
          height: 0.14rem;
        }
      }

      li:nth-of-type(1),
      li:nth-of-type(2) {
        width: 35%;
        span {
          margin-right: 0.2rem;
        }
      }
      li:nth-of-type(3),
      li:nth-of-type(4) {
        width: 15%;
      }
    }
  }
  .select {
    position: absolute;
    // max-height: 2.65rem;
    width: 100%;
    .kinds {
      display: flex;
      height: 2.65rem;
      width: 100%;
      justify-content: space-between;
      background: #f1f1f1;
      .left_select {
        width: 50%;
      }
      .right_select {
        width: 50%;
      }
      ul {
        overflow-x: hidden;
        li {
          height: 0.45rem;
          border-bottom: 1px solid #dfdfdf;
          padding: 0 0.2rem;
          background: #fff;
          display: flex;
          align-items: center;
          text-align: left;
          font-size: 0.14rem;
        }
      }
    }
    .allsorts {
      background: #fff;
      ul {
        display: flex;
        flex-direction: column;
        li {
          height: 0.42rem;
          border-bottom: 1px solid #d5d5d5;
          line-height: 0.42rem;
          font-size: 0.16rem;
          text-align: left;
          padding: 0 0.2rem;
        }
      }
    }
  }
}
</style>
