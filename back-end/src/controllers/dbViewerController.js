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
  },
  async deleteUser (req, res) {
    try {
      const { userID, userEmail } = req.params
      const user = await User.findOne({
        where: {
          id: userID,
          email: userEmail
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'User was not found'
        })
      }
      await user.destroy()
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the user'
      })
    }
  }
}
