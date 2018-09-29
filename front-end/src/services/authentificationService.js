import Api from '@/services/api'

export default {
  register (credentials) {
    return Api().post('auth/register', credentials)
  },
  login (credentials) {
    return Api().post('auth/login', credentials)
  }
}

// AuthentificationService.register({
//   email:'ex@gew.fr',
//   password:"thepswd"
// })
