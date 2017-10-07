import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
      count:1   //全局变量
}
const mutations ={//同步的
  add(state,r){//第一个是默认的值，第二个是参数
    state.count+=r;
  },
  reduce(state){
    state.count--;
  }
}
const getters={//过滤  等同于computed
  count:(state)=>state.count +=50
  // count:function(state){
  //       return state.count +=50;
  //   }
}
const actions = {
  addAction(context){//context上下文对象
    context.commit('add',10)
    setTimeout(()=>{context.commit('reduce')},3000);//增强异步体验
    console.log('我比reduce先执行了')
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

const moduleA={//大项目才会推荐 使用
  state,
  mutations,
  getters,
  actions
}
export default new Vuex.Store({
  modules:{a:moduleA}
})