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
    path: '/createbilling',
    name: 'createbilling',
    component: () => import('./../views/CreateBilling')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
