import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
