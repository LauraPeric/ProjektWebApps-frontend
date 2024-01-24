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
    path: '/samiprofil',
    name: 'samiprofil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/samiprofil.vue')
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
  {
    path: '/forumtema1', // dodali smo dinamički parametar ":id"
    name: 'ForumTema',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/Forumtema1.vue')
  },
  {
    path: '/receptimeso', // dodali smo dinamički parametar ":id"
    name: 'Receptimeso',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/Receptimeso.vue')
  },
  {
    path: '/registracijakilia', // dodali smo dinamički parametar ":id"
    name: 'registracijakilia',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/Registracijakilia.vue')
  },
  {
    path: '/login', // dodali smo dinamički parametar ":id"
    name: 'login',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/login.vue')
  },
  {
    path: '/signup', // dodali smo dinamički parametar ":id"
    name: 'signup',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/signup.vue')
  },
  {
    path: '/logina', // dodali smo dinamički parametar ":id"
    name: 'logina',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/logina.vue')
  },
  {
    path: '/jelapil', // dodali smo dinamički parametar ":id"
    name: 'jelapil',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/jelapil.vue')
  },
  {
    path: '/samirecept', // dodali smo dinamički parametar ":id"
    name: 'samirecept',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/samirecept.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
