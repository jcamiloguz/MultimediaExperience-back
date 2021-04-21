const School = require('../models/school.model')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  console.log(req)
  const newSchool = new School({
    school_name: req.body.school_name || null,
  })
  School.createSchool(newSchool, (err, data) => {
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
  School.getAll((err, data) => {
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
