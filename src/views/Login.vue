<template>
  <div class="login">
    <div class="login-tip">
      正在验证用户信息，请稍后
    </div>
  </div>
</template>

<script>
import * as dd from 'dingtalk-jsapi'
import{getCorpId, getDdCode} from '../api/api'
export default {
  name: 'Login',
  data() {
    return {}
  },
  created() {
    this.getCorpId()
  },
  methods: {
    getCorpId() {
      // if (dd.env.platform !== 'notInDingTalk') {
        getCorpId().then(res => {
          if (res.status == 0) {
            let Base64 = require('js-base64').Base64
            let crop_id = Base64.decode(res.data)
            this.login(crop_id)
          } else {
            alert(res.error)
          }
        })
      // } else {
      //   alert('请用钉钉工作台中打开此应用。')
      // }
    },
    login(crop_id) {
      let corpId = crop_id
      dd.ready(() => {
        // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
        dd.runtime.permission.requestAuthCode({
          corpId: corpId,
          onSuccess: info => {
            let code = info.code // 通过该免登授权码可以获取用户身份
            this.autoLogin(code)
          },
          onFail: err => {
            console.log(err)
            dd.device.notification.alert({
              message: '钉钉免密登录失败',
              title: '提示',
              buttonName: '确定'
            })
          }
        })
      })
    },
    autoLogin(authCode) {
      var parm = {}
      parm.authoCode = authCode + ''
      parm.version = '1.0'
      getDdCode(parm).then(res => {
        if (res.status == 0) {
          let info = {}
          info.name = res.name
          info.ou = res.ou
          info.id = res.organization
          info.username = res.username
          info.title = res.title

          console.log('2222222222222222222', res)
          window.localStorage.setItem('info', JSON.stringify(info))
          window.localStorage.setItem('token', res.token)
          window.localStorage.setItem('channelIds', JSON.stringify(res.channelIds))
          window.localStorage.setItem('route', JSON.stringify(res.route))
          let menu = res.menu
          if (menu.length == 0) {
            alert('您没有权限访问该系统，请向IT中心申请权限！')
          } else {
            window.localStorage.setItem('menu', res.menu)
            this.$router.push({ path: '/welcome' })
          }
        } else {
          alert('钉钉免密登录失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
