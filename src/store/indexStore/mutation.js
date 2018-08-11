
import {
  INCREMENT
} from './const'
const mutations = {
  //mutations里的方法能接收到state
  [INCREMENT](state, payload) {
    state = payload;
  },
  reduce(state) {
    state;
  }

}

export default mutations