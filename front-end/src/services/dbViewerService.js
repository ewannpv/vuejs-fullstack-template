import Api from '@/services/api'

export default {
  index () {
    return Api().get('board/dbViwer')
  },
  deleteUser (credentials) {
    return Api().post('board/dbViwer/deleteUser', credentials)
  }
}
