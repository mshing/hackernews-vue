import Vue from 'vue'
import Router from 'vue-router'
import NewsPage from '@/containers/NewsPage'
import AboutPage from '@/containers/AboutPage'
import VideoPage from '@/containers/VideoPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'header__link--active',
  linkExactActiveClass: 'header__link--exact-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: NewsPage
    },
    {
      path: '/top/',
      name: 'Top',
      component: NewsPage
    },
    {
      path: '/new/',
      name: 'New',
      component: NewsPage
    },
    {
      path: '/show/',
      name: 'Show',
      component: NewsPage
    },
    {
      path: '/ask/',
      name: 'Ask',
      component: NewsPage
    },
    {
      path: '/jobs/',
      name: 'Jobs',
      component: NewsPage
    },
    {
      path: '/about/',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/videos/',
      name: 'Videos',
      component: VideoPage
    }
  ]
})
