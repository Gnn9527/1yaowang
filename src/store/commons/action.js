import axios from 'axios'
import http from '../../lib/httpclient'
import { Indicator } from 'mint-ui';
import {
  GETFILTER,
  GETDATA
} from './const'


const data = {
  cityname: '广州',
  locateProvinceId: 20,
  platform: 9
}

const actions = {
  getLists(_context, payload) {
    Indicator.open({
      text: 'Loading...',
      spinnerType: 'fading-circle'
    });
    delete payload.type;

    let params = Object.assign(data, payload)
    // console.log(payload)
    http.post('search/prod?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533349663223&signature=****&siteid=9',
      params
    ).then(res => {
      Indicator.close();
      // console.log(555, res)
      _context.commit({
        type: GETDATA,
        dataLists: res.data.hits,
        httpStatus:res.rtn_code
      })
    })
  },
  filterList(_context, {
    id
  }) {
    Indicator.open({
      text: 'Loading...',
      spinnerType: 'fading-circle'
    });
    http.post('search/category/?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533370114251&signature=****&siteid=9', {
      categoryid: id,
    }, ).then(res => {
      Indicator.close();
      // console.log(666, res)
      if (res.data.categories === 'null') {
        _context.commit({
          type: GETFILTER,
          categories: null
        })
      } else {
        _context.commit({
          type: GETFILTER,
          categories: res.data.categories
        })
      }
    })
  }
}

export default actions
