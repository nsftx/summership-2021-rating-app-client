import Vue from 'vue'
import VueRouter from 'vue-router'
import rating from '../views/rating.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rating',
    component: rating
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
