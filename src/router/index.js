import Vue from 'vue'
import Router from 'vue-router'
import Config from './config'

Vue.use(Router)

const WeChat = () => import('@/components/WeChat')
const Contact = () => import('@/components/Contact')
const Find = () => import('@/components/Find')
const Me = () => import('@/components/Me')

const Welcome = () => import('@/components/Welcome')

const Search = () => import('@/components/Search')
const Info = () => import('@/components/Info')

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: {
        title: '微信'
      }
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: WeChat,
      meta: {
        title: '微信'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: '通讯录'
      }
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
      meta: {
        title: '发现'
      }
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      meta: {
        title: '我'
      },
      children: []
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      meta: {
        title: '个人信息'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        title: '搜索'
      }
    }
  ]
})

new Config(router).render()

export default router
