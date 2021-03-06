const Answer = require('../models/answer.model')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const newAnswer = new Answer({
    id_question: req.body.id_question || null,
    id_user: req.body.id_user || null,
   id_option: req.body.id_option || null,
  })
  Answer.createAnswer(newAnswer, (err, data) => {
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
