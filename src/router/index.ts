import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    }, 
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    }
  ]
})

export default router
