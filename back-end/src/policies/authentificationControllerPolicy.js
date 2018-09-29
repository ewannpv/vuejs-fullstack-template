const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(500).send({
        error: 'An error has occured'
      })
    }
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[[a-zA-Z0-9#$^+=!*()@%&.*{}]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Email must be valid.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password must be at least 8 characters.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    } else {
      next()
    }
  }
}
