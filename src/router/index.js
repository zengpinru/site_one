import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Product from '@/components/product/Product'
import News from '@/components/news/News'
import Contact from '@/components/contact/Contact'

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
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
