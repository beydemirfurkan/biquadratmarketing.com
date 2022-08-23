import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/socialmedia',
    name: 'socialmedia',
    component: () => import('@/views/subpage/SocialMedia'),
  },
  {
    path: '/graphic',
    name: 'graphic',
    component: () => import('@/views/subpage/Graphic'),
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/subpage/Project'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
