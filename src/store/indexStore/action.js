import axios from 'axios'
import { INCREMENT } from './const'
const actions = {
  homeGoodsList() {
    this.$http(
      'http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533035341362&signature=****&siteid=9',
      {
        type: 'get'
      }
    ).then(res => {
    })
  }
}

export default actions