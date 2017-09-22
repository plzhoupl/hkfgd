import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/component/detail/about'
import Zhaopin from '@/components/component/detail/zhaopin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/index',
      name: 'index',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/zhaopin',
      component: Zhaopin
    },
  ]
})
