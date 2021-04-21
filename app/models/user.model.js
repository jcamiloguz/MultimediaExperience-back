const sql = require('./db')

const User = function (user) {
  this.user_name = user.user_name
  this.user_last_name = user.user_last_name
  this.email = user.email
  this.created_at = user.created_at
  this.born_date = user.born_date
  this.id_school = user.id_school
}
User.createUser = (user, results) => {
  sql.query('INSERT INTO users SET ?', user, (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('New user created: ', { id: res.insertId, ...user })
    results(null, res)
  })
}
User.getAll = (results) => {
  sql.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('Users: ', { res })
    results(null, res)
  })
}
module.exports = User
