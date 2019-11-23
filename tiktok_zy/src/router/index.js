import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sameCity',
    component: () => import('../views/SameCity.vue')
  },
  {
    path: '/serach',
    component: () => import('../views/Serach.vue')
  },
  {
    path: '/user/:id',
    component: () => import('../views/User.vue')
  },
  {
    path: '/subscribe',
    component: () => import('../views/Subscribe.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/reg') return next()
//   const token = window.sessionStorage.getItem('token')
//   if (!token) {
//     window.sessionStorage.removeItem('token')
//     return next('/login')
//   }
//   next()
// })

export default router
