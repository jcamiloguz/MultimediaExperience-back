const sql = require('./db')

const School = function (school) {
  this.school_name = school.school_name
}
School.createSchool = (school, results) => {
  sql.query('INSERT INTO schools SET ?', school, (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('New school created: ', { id: res.insertId, ...school })
    results(null, res)
  })
}
School.getAll = (results) => {
  sql.query('SELECT * FROM schools', (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('Schools: ', { res })
    results(null, res)
  })
}
module.exports = School
