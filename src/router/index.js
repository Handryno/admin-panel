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
    path: '/detailPembayaran',
    name: 'DetailPembayaran',
    component: () => import('./../views/DetailPembayaran')
  },
  {
    path: '/konfirmasiNoHp',
    name: 'KonfirmasiNoHp',
    component: () => import('./../views/KonfirmasiNoHp')
  },
  {
    path: '/konfirmasiTransaksi',
    name: 'KonfirmasiTransaksi',
    component: () => import('./../views/KonfirmasiTransaksi')
  },
  {
    path: '/metodePembayaran',
    name: 'MetodePembayaran',
    component: () => import('./../views/MetodePembayaran')
  },
  {
    path: '/methodeDetailPembayaran',
    name: 'MethodeDetailPembayaran',
    component: () => import('./../views/MethodeDetailPembayaran')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
