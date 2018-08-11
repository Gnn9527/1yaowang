
import {
  CHANGE_DETAILS_STATE
} from './const'
const mutations = {
  //mutations 里的方法能接收到state
  [CHANGE_DETAILS_STATE](state, payload) {
    state.goodsDetData = payload;
    console.log('mutations=>',state.goodsDetData)
  }
}

export default mutations