const cors_api = '/cors-api'
import axios from './axios'

// 获取钉钉corpId
export function getCorpId() {
  return axios({
    method: 'post',
    url: `${cors_api}/iacrm-form-0.0.1-SNAPSHOT/info/dingding`
  })
}

// 钉钉授权码
export function getDdCode(params) {
  return axios({
    method: 'post',
    url: `${cors_api}/iacrm-form-0.0.1-SNAPSHOT/api/login`,
    params: params
  })
}
