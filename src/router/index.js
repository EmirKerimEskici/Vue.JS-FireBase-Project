import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Access from '../views/Access.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/entry',
    name: 'Access',
    component: Access
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
