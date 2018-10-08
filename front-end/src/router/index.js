import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import AuthLayout from '@/components/auth/Auth'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import DBViewer from '@/components/DBViewer'
import IsUserLoggedIn from '@/policies/isUserLoggedIn'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/board'
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
      children: [
        {
          name: 'dbViewer',
          path: 'dbViewer',
          beforeEnter: IsUserLoggedIn,
          component: DBViewer
        }
      ]
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
        }
      ]
    }
  ],
  mode: 'history'
})
