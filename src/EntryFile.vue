<template>
  <div id="EntryFile">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import homeMain from './components/pages/home/homeMain.vue'
// console.log('EntryFile', { homeMain })
export default {
  name: 'EntryFile',
  components: {
    homeMain
  },
  mounted() {}
}
</script>

<style>
#EntryFile {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
body,
html {
  height: 100%;
}
</style>
