const AuthentificationController = require('./controllers/authentificationController')
const AuthentificationControllerPolicy = require('./policies/authentificationControllerPolicy')
const DBViewerController = require('./controllers/dbViewerController')
// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/auth/register',
    AuthentificationControllerPolicy.register,
    AuthentificationController.register)

  app.post('/auth/login',
    AuthentificationController.login)

  app.get('/board/dbViwer',
    DBViewerController.index)
}
