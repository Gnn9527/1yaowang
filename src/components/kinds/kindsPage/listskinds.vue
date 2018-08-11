<template>
    <div class="listsKinds">
        <p>{{detailsData.name}}</p>
        <ul class="lists" v-if="detailsData.thridCategory">
            <li v-for="obj in detailsData.thridCategory" :key="obj.id" @click="getId(obj)">
                <img v-lazy="obj.icon" :src="obj.icon"/>
                <span>{{obj.name}}</span>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
  name: "listsKinds",
  props: ["detailsData"],
  methods: {
    getId(obj) {
      this.$router.push({
        name: "details",
        query: {
          id: obj.id,
          heguiKeyword: obj.name
        }
      });
    }
  },
  mounted() {
    // console.log(999,this.detailsData.thridCategory);
  }
};
</script>

<style lang="scss" scoped>
.listsKinds {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  p {
    border-bottom: 0.01rem solid #ddd;
    text-align: left;
    line-height: 0.4rem;
    font-size: 0.14rem;
  }
  ul {
    width: 100%;
    // height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0.2rem 0;
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      margin-right: 5%;
      margin-bottom: 0.3rem;
      img {
        width: 100%;
        height: 0.56rem;
        width: 0.56rem;
        background: #ddd;
        border-radius: 50%;
      }
      span {
        margin-top: 0.1rem;
      }
    }
    li:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
</style>
