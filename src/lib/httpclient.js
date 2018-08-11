import axios from 'axios'
import { Indicator } from 'mint-ui';
const baseUrl = 'http://gateway.fangkuaiyi.com/'
let filterUrl = (_url) => {
  if (_url && _url.startsWith('http')) {
    return _url;
  }
  return baseUrl + _url;
}

let dataParams = {
  demandcartkey: 'd8d1e905a747283026c31578bd82d411',
  cartkey: 'd8d1e905a747283026c31578bd82d411',
  provinceid: 20,
  province: 20,
  provincename: '广东',
  tradername: 'yw_app',
  trader: 'h5',
  closesignature: 'yes',
  signature_method: 'md5',
  timestamp: Date.now(),
  signature: '****',
  siteid: 9,


}


export default {
  get(_url, _params = {}) {
    return new Promise((resolve, reject) => {
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      });
      axios({
        url: filterUrl(_url),
        method: 'get',
        params: Object.assign(dataParams, _params),
      }).then((res) => {
        Indicator.close();
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  },
  post(_url, _params = {}) {

    return new Promise((resolve, reject) => {
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      });
      axios({
        url: filterUrl(_url),
        method: 'post',
        data: Object.assign(dataParams, _params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then((res) => {
        Indicator.close();
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
