const config = require('../config/config')
const CryptoJS = require('crypto-js')

function hashPassword (user, options) {
  if (!user.changed('password')) {
    return
  }
  const hashPassword = CryptoJS.HmacSHA1(user.password, config.hash.key).toString()
  return user.setDataValue('password', hashPassword)
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    const hashPassword = CryptoJS.HmacSHA1(password, config.hash.key).toString()
    return hashPassword === this.password
  }

  User.associate = function (models) {
  }

  return User
}
