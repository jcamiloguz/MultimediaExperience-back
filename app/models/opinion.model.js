const sql = require('./db')

const Opinion = function (opinion) {
  this.id_user = opinion.id_user
  this.content_opinion = opinion.content_opinion
  this.score= opinion.score
}
Opinion.createOpinion = (opinion, results) => {
  sql.query('INSERT INTO opinions SET ?', opinion, (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('New opinion created: ', { id: res.insertId, ...opinion })
    results(null, res)
  })
}
Opinion.getAll = (results) => {
  sql.query('SELECT * FROM opinions', (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('Opinions: ', { res })
    results(null, res)
  })
}
module.exports = Opinion
