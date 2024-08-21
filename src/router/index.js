import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsSite from '../views/NewsSite.vue'
import AsTable from '../views/AsTable.vue'
import Weather from '../views/Weather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news-site',
      name: 'news',
      component: NewsSite
    },
    {
      path: '/as-table',
      name: 'table',
      component: AsTable
    },
    {
      path: '/weatherPage',
      name: 'weather',
      component: Weather
    },

    {
      path: '/coins',
      name: 'coins',
      component: () => import('../views/Coins.vue')
    },
    {
      path: '/bible',
      name: 'bible',	
      component: () => import('../views/Bible.vue')
    },
  ]
})

export default router
