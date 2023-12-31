// vue-router中提供3种的路由模式
import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
  },
  {
    path:'/users',
    component:()=>import('../views/users/userCenter.vue'),
    name: '用户'
  },
  {
    path:'/music',
    component:()=>import('../views/Music/music.vue'),
    name:'音乐'
  },
  {
    path: '/login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/register',
    component:()=>import('../views/register.vue')
  },
  {
    path:'/vote',
    component:()=>import('../views/vote/voteQuestion.vue'),
  },
  {
    path:'/vote/voteEdit',
    component:()=>import('../views/vote/voteEdit.vue'),
  },
  {
    path: '/vote/:pid?:title',
    component:()=>import('../views/vote/voteDetail.vue'),
    name: 'voteDetail'
  },
  {
    path:'/bookMain',
    component:()=>import('../views/book/bookMain.vue'),
  },
  {
    path:'/video',
    component:()=>import('../views/video/video.vue'),
    name:'videoDetail'
  }
]

const router = createRouter({
  // 路由的模式
  history: createWebHistory(),
  // 路由规则
  routes
})

router.afterEach((to) => {
  // console.log(blog);
  document.title = to.name || "韩少yyds";
});
export default router
