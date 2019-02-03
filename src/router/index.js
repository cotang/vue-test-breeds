import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import Breeds from '@/views/Breeds.vue'
import Fav from '@/views/Fav.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/fav',
      component: Fav
    },
    {
      path: '/:id',
      component: Breeds
    }
  ]
})

export default router
