import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuPrincipal from '../views/MenuPrincipal.vue'
import Login from  '../views/Login'
import Opcion1 from '../views/Opcion1'
import Opcion2 from '../views/Opcion2'
import Opcion3 from '../views/Opcion3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPrincipal
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/opcion1',
    name: 'opcion1',
    component: Opcion1
  },
  {
    path: '/opcion2',
    name: 'opcion2',
    component: Opcion2
  },
  {
    path: '/opcion3',
    name: 'opcion3',
    component: Opcion3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
