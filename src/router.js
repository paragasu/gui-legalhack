import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld.vue'
import View from './components/View.vue'

Vue.use(Router)

export default new Router({
  base: '/gui-legalhacks/docs',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/view',
      name: 'view',
      component: View
    }
  ]
})
