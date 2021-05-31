const Opinion = require('../models/opinion.model')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const newOpinion = new Opinion({
    id_user: req.body.id_user || null,
    content_opinion: req.body.content_opinion || null,
    score: req.body.score || null,
  })
  Opinion.createOpinion(newOpinion, (err, data) => {
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
  Opinion.getAll((err, data) => {
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
