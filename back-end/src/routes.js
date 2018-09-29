const AuthentificationController = require('./controllers/authentificationController')
const AuthentificationControllerPolicy = require('./policies/authentificationControllerPolicy')

module.exports = (app) => {
  app.post('/auth/register',
    AuthentificationControllerPolicy.register,
    AuthentificationController.register)

  app.post('/auth/login',
    AuthentificationController.login)
}
