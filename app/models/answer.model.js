const sql = require('./db')

const Answer = function (answer) {
  this.id_question = answer.id_question
  this.id_user = answer.id_user
  this.id_option = answer.id_option
}
Answer.createAnswer = (answer, results) => {
  sql.query('INSERT INTO answers SET ?', answer, (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('New answer created: ', { id: res.insertId, ...answer })
    results(null, res)
  })
}
Answer.getAll = (results) => {
  sql.query('SELECT * FROM answers', (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('answers: ', { res })
    results(null, res)
  })
}
module.exports = Answer
