const { User } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const users = await User.findAll()
      if (!users) {
        return res.status(403).send({
          error: 'No user found'
        })
      }
      res.send({
        users: users
      })
    } catch (err) {
      return res.status(500).send({
        error: 'Internal error'
      })
    }
  }
}
