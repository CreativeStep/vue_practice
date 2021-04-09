import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/page_1'
import create from '@/components/createEvent'
import order from '@/components/eventOrder'
import all from '@/components/allEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/page_1',
      name: 'page1',
      component: page1
    }, {
      path: '/create',
      name: 'create',
      component: create
    }, {
      path: '/order',
      name: 'order',
      component: order
    }, {
      path: '/all',
      name: 'all',
      component: all
    }
  ]
})
