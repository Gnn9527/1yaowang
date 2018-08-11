import {
  GETFILTER,
  GETDATA,
  DELETE,
  SHOPLISTNUM
} from './const'

const mutations = {
  [GETFILTER](_state, payload) {
    _state.categories = payload.categories
  },
  [GETDATA](_state, payload) {
    _state.dataLists = _state.dataLists.concat(payload.dataLists)
    _state.httpStatus = payload.httpStatus
  },
  [DELETE](_state, payload) {
    if (payload.clear) {
      _state.dataLists = []
    }
  },
  [SHOPLISTNUM](_state, payload) {
    _state.shopList = payload || []
    console.log('MU SHOPLISTNUM=>', payload)
    let shopAllNum = 0
    for (var key of _state.shopList) {
      shopAllNum += key.qty * 1
    }
    _state.shoplistNum = shopAllNum
  },
  saveKinds(_state, payload) {
    _state.req = payload.req
  }
}

export default mutations