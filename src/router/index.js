import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/top/',
      name: 'Top',
      component: Home
    },
    {
      path: '/new/',
      name: 'New',
      component: Home
    },
    {
      path: '/show/',
      name: 'Show',
      component: Home
    },
    {
      path: '/ask/',
      name: 'Ask',
      component: Home
    },
    {
      path: '/jobs/',
      name: 'Jobs',
      component: Home
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    }
  ]
})
