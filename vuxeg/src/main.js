// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { WechatPlugin, ToastPlugin, AlertPlugin } from 'vux'
//import store from './store'

Vue.config.productionTip = false

//移动端300ms延迟处理
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(WechatPlugin)//那么之后任何组件中都可以通过 this.$wechat 访问到 wx 对象。
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
//console.log(Vue.wechat) // 可以直接访问 wx 对象。
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
