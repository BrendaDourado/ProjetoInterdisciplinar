import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIn from '../views/HomeIn.vue'
import CadastroCliente from '../views/CadastroCliente.vue'
import LoginIn from '../views/LoginIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeIn
  },
  {
    path: '/CadastroCliente',
    name: 'CadastroCliente',
    component: CadastroCliente
  },
  {
    path: '/LoginIn',
    name: 'LoginIn',
    component: LoginIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
