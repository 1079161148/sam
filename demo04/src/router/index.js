import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Count from '@/components/Count'
import header from '@/components/header'
import count1 from '@/components/count1'
import count2 from '@/components/count2'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex';
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path:'/count',
      component:Count,
      children:[
            {
              path:'/',
              component:Count
          },{
              path:'hi1',
              component:count1
          },{
              path:'hi2',
              component:count2
          }
      ]
    },{
      path:'/header',
      component:header
    }

  ]
})
