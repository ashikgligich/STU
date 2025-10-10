import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/builder',
      name: 'builder',
      component: () => import('../views/BuilderView.vue')
    },
    {
      path: '/stats/:id',
      name: 'stats',
      component: () => import('../views/ShipStatsView.vue')
    }
  ]
})

export default router
