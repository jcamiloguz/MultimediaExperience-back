const User = require('../models/user.model')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  const newUser = new User({
    user_name: req.body.user_name || null,
    user_last_name: req.body.user_last_name || null,
    email: req.body.email || null,
    created_at: req.body.created_at || null,
    born_date: req.body.born_date || null,
    id_school: req.body.id_school | null,
  })
  User.createUser(newUser, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving cities.',
      })
    } else {
      res.send(data)
    }
  })
}
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving positions.',
      })
    } else {
      res.send(data)
    }
  })
}
