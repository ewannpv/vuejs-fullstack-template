module.exports = function (req, res, next) {
  if (!req.user.isAdmin) {
    res.status(403).send({
      error: 'you do not have access to this resource'
    })
  } else {
    next()
  }
}
