import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIn from '../views/HomeIn.vue'
import CadastroCliente from '../views/CadastroCliente.vue'
import LoginIn from '../views/LoginIn.vue'
import DoarView from '../views/DoarView'
import CadastroInstituicao from '../views/CadastroInstituicao'
import InstituicoesParceiras from '../views/InstituicoesParceiras'
import AnaliseSugestao from '../views/AnaliseSugestao'
import ConfirmaCadastro from '../views/ConfirmaCadastro'
import HomeLogada from '../views/HomeLogada'

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
  },
  {
    path: '/CadastroInstituicao',
    name: 'CadastroInstituicao',
    component: CadastroInstituicao
  },
  {
    path: '/InstituicoesParceiras',
    name: 'InstituicoesParceiras',
    component: InstituicoesParceiras
  },
  {
    path: '/DoarView',
    name: 'DoarView',
    component: DoarView
  },
  {
    path: '/AnaliseSugestao',
    name: 'AnaliseSugestao',
    component: AnaliseSugestao
  },
  {
    path: '/ConfirmaCadastro',
    name: 'ConfirmaCadastro',
    component: ConfirmaCadastro
  },
  {
    path: '/HomeLogada',
    name: 'HomeLogada',
    component: HomeLogada
  }
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
