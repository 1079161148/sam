import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Check from '@/components/Check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/check',
      name: 'Check',
      component: Check
    }
  ]
})
