import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/component/detail/about'
import Zhaopin from '@/components/component/detail/zhaopin'
import Product from '@/components/component/product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: "/product", name:'product', component: Product }
      ]
    },
    {
      path: '/about',
      name:'about',
      component: About
    },
    {
      path: '/zhaopin',
      component: Zhaopin
    },
  ]
})
