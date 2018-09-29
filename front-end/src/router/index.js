import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import AuthLayout from '@/components/auth/Auth'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: Login
        },
        {
          name: 'register',
          path: 'register',
          component: Register
        },
        {
          path: '',
          redirect: { name: 'login' }
        }
      ]
    }
  ]
})
