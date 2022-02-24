import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PaymentView from '../views/PaymentView.vue'
import SongDetail from '../views/SongDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/song-detail',
    name: 'SongDetail',
    component: SongDetail
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // if (!localStorage.getItem("token") && to.name === 'home') {
  //   next({ name: 'Login' })
  // } else {
  //   next()
  // }
if (localStorage.getItem('token') && to.name === 'Login') {
    next({ name: 'home'})
  } else {
    next()
  }
})

export default router
