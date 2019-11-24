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
  },
  {
    path: '/reg',
    component: () => import('../views/Reg.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/userOne',
    component: () => import('../views/UserOne.vue')
  },
  {
    path: `/user/:id`,
    component: () => import('../views/Users.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/reg') return next()
  const token = window.sessionStorage.getItem('id')
  if (!token) {
    window.sessionStorage.removeItem('id')
    return next('/reg')
  }
  next()
})

export default router
