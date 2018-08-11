import axios from 'axios'
import { CHANGE_DETAILS_STATE } from './const'
const actions = {
  goodsDet_mod(context) {
    axios.post(
      'http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533177261926&signature=****&siteid=9'
    ).then(res => {
      context.commit({
        type: CHANGE_DETAILS_STATE,
        goodsDetData: res

      })
      console.log('actions=>', res)
      // this.dispatch('action_get_user_info')
      // success(res)
    })
  }
}

export default actions