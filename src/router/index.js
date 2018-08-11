import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homeMain from '../components/pages/index.vue'
import listKinds from '../components/kinds/listKinds.vue'
import goodsDetails from '../components/pages/goodsDetails'
import details from '../components/details/details.vue'
import detailsSearch from '../components/details/detailsData/detailsSearch.vue'
import mine from '../components/mine/mine.vue'
import login from '../components/mine/minePages/loginQuick.vue'
import hasLogin from '../components/mine/minePages/hasLogin.vue'
import setPassword from '../components/mine/minePages/setPassword.vue'
import buyCart from '../components/pages/buyCart'
const routes = [{
  path: '/',
  name: 'index',
  component: homeMain
}, {
  path: '/listKinds',
  name: 'listKinds',
  component: listKinds
},
{
  path: '/goodsDetails',
  name: 'goodsDetails',
  component: goodsDetails
}, {
  path: '/details',
  name: 'details',
  component: details
}, {
  path: '/detailsSearch',
  name: 'detailsSearch',
  component: detailsSearch
}, {
  path: '/mine',
  name: 'mine',
  component: mine
}, {
  path: '/login',
  name: 'login',
  component: login
}, {
  path: '/hasLogin',
  name: 'hasLogin',
  component: hasLogin
}, {
  path: '/setPassword',
  name: 'setPassword',
  component: setPassword
},
{
  path: '/cart',
  name: 'cart',
  component: buyCart
}

]

const router = new VueRouter({
  routes
})

export default router;