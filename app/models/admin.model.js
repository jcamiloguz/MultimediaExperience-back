const sql = require('./db')

const Admin = function (admin) {
  this.admin_name = admin.admin_name
  this.adimn_last_name = admin.adimn_last_name
  this.email = admin.email
  this.password = admin.password
}

Admin.getAll = (results) => {
  sql.query('SELECT * FROM admins', (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      results(null, err)
      return
    }
    console.log('admins: ', { res })
    results(null, res)
  })
}
module.exports = Admin
