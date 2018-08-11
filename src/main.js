
import Vue from 'vue'
import EntryFile from './EntryFile'
import './modules/config'
import router from './router'
import store from './store'

let app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    EntryFile
  },
  template: '<EntryFile/>'
})

// function defaultImg() {
//   
// }