import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  // iView.LoadingBar.start()
  next(response => {
    // iView.LoadingBar.finish()
    return response
  })
})

let host
let specHost
if (process.env.NODE_ENV === 'production') {
  host = location.origin
  specHost = 'http://padmom.com'
} else {
  host = 'http://api.padmom.com/lighter'
  specHost = 'http://api.padmom.com/lighter'
}
let v = new Vue()

function ErrorHandle(res) {
  if (res.code == 403) {
    Vue.$vux.toast.text('请重新登录', 'top')
    localStorage.clear()

    Cookies.remove('logined')
    Cookies.remove('email')
    // location.href = location.origin + '/login'
  } else {
    Vue.$vux.toast.text(res.msg, 'top')
  }
}

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    token: state => state.token,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
  },
  actions: {
    //点击领取
    receiveRewards(context, payload) {
      Vue.http.post(`${host}/website/createorder`, payload.data, {
        emulateJSON: true
      }).then(res => {
        if (res.body.code == 0) {
          payload.callback(res.body.data)
        } else {
          ErrorHandle(res.body)
        }
      })
    }
  }
})
