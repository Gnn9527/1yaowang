import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueCookie from 'vue-cookie'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueCookie)
Vue.use(ElementUI);
Vue.use(MintUI)

import 'element-ui/lib/theme-chalk/index.css';
import '../stylesheets/main.scss'
import 'swiper/dist/css/swiper.min.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'



Vue.prototype.$http = axios
Vue.component('icon', Icon)
Vue.config.productionTip = false

// rem
import computed_rem from './rem'
// 计算rem
computed_rem()
