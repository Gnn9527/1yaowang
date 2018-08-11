<template>
  <div class="detailsList">
    <div class="detailsFilterTop">
      <detailsFilter1></detailsFilter1>
      <detailsFilter2></detailsFilter2>
    </div>
    <datailsDataLists></datailsDataLists>
  </div>
</template>

<script>
import detailsFilter1 from './detailsFilter-tab1.vue'
import detailsFilter2 from './detailsFilter-tab2.vue'
import datailsDataLists from './detailsDataLists.vue'

export default {
  components: {
    detailsFilter1,
    detailsFilter2,
    datailsDataLists
  },
  data() {
    return {}
  },
  mounted() {
    // this.$store.dispatch({
    //   type: 'getLists',
    //   categoryid: this.$route.query.id,
    //   heguiKeyword: this.$route.query.heguiKeyword,
    //   promotiontype: "",
    //   sort: "",
    //   fatherid: "",
    //   clientAppVersion: ""
    // });
  }
}
</script>

<style lang="scss" scoped>
.detailsList {
  position: relative;
  .detailsFilterTop {
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0.42rem;
  }
}
</style>

