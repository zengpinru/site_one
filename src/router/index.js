import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import About from '@/components/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About
    }
  ]
})
