import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./../views/Dashboard')
  },
  {
    path: '/inquiry',
    name: 'inquiry',
    component: () => import('./../views/Inquiry')
  },
  {
    path: '/konfirmasiTransaksi',
    name: 'KonfirmasiTransaksi',
    component: () => import('./../views/KonfirmasiTransaksi'),
    props: true,
  },
  {
    path: '/metodePembayaran',
    name: 'MetodePembayaran',
    component: () => import('./../views/MetodePembayaran'),
    props: true,
  },
  {
    path: '/virtualAccount',
    name: 'VirtualAccount',
    component: () => import('./../views/VirtualAccount'),
    props: true,
  },
  {
    path: '/profileUser',
    name: 'ProfileUser',
    component: () => import('./../views/ProfileUser')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./../views/Dashboard')
  },
  {
    path: '/detailUser',
    name: 'DetailUser',
    component: () => import('./../views/DetailUser')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
