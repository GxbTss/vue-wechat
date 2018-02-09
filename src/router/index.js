import Vue from 'vue'
import Router from 'vue-router'
import Config from './config'

Vue.use(Router)

const Car = () => import('@/components/Car')

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'car',
      component: Car,
      meta: {
        title: 'h5'
      }
    }
  ]
})

new Config(router).render()

export default router
