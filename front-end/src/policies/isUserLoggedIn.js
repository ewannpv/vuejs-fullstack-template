import store from '@/store/store'

export default function (to, from, next) {
  if (!store.state.isUserLoggedIn) {
    next('/auth/login')
  } else {
    next()
  }
}
