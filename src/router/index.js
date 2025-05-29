import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// ... другие импорты

const routes = [
  { path: '/',        component: HomeView,  meta: { requiresAuth: true } },
  // ... ваши остальные маршруты
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

