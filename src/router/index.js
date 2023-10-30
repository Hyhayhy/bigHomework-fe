// vue-router中提供3种的路由模式
import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
  },
  {
    path:'/users',
    component:()=>import('../views/users/userCenter.vue')
  },
  {
    path:'/music',
    component:()=>import('../views/Music/music.vue')
  }
]

const router = createRouter({
  // 路由的模式
  history: createWebHistory(),
  // 路由规则
  routes
})

export default router
