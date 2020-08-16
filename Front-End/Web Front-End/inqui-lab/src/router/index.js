import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue'
import Teams from '../views/Teams.vue'
import Add from '../views/AddUser.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Add',
    name: 'Add',
    component: Add
  },
  {
    path: '/Teams',
    name: 'Teams',
    component: Teams
  },
]

const router = new VueRouter({
  routes
})

export default router
