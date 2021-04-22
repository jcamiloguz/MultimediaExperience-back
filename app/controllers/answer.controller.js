const Answer = require('../models/answer.model')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const newAnswer = new Answer({
    school_name: req.body.id_question || null,
    school_name: req.body.id_user || null,
    school_name: req.body.id_option || null,
  })
  Answer.createSchool(newAnswer, (err, data) => {
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
  Answer.getAll((err, data) => {
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
