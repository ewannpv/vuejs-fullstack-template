const AuthentificationController = require('./controllers/authentificationController')
const AuthentificationControllerPolicy = require('./policies/authentificationControllerPolicy')
const DBViewerController = require('./controllers/dbViewerController')
const isAuthenticated = require('./policies/isAuthenticated')
const isAdmin = require('./policies/isAdmin')

module.exports = (app) => {
  app.post('/auth/register',
    AuthentificationControllerPolicy.register,
    AuthentificationController.register)
  app.post('/auth/login',
    AuthentificationController.login)

  app.get('/board/dbViwer',
    isAuthenticated,
    DBViewerController.index)
  app.post('/board/dbViwer/deleteUser',
    isAuthenticated,
    isAdmin,
    DBViewerController.deleteUser)
}
