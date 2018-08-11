<template>
  <div class="homeList">
    <!-- <keep-alive> -->
    <midHeader></midHeader>
    <homeMain></homeMain>
    <navLists></navLists>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import midHeader from '../commons/seek.vue'
import homeMain from './home/homeMain.vue'
import navLists from '../commons/footer.vue'
export default {
  name:'homeList',
  components:{
    midHeader,
    homeMain,
    navLists
  }
}
</script>

<style lang="scss" scoped>
.homeList{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

