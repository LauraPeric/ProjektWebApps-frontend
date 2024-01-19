import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/Pocetna.vue'

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: Pocetna
  },
  {
    path: '/onama',
    name: 'Onama',
    component: () => import(/* webpackChunkName: "onama" */ '../views/Onama.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue')
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import(/* webpackChunkName: "forum" */ '../views/Forum.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
  },
  {
    path: '/recepti',
    name: 'recepti',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/Recepti.vue')
  },
  {
    path: '/objavateme',
    name: 'objavateme',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/Objavateme.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
