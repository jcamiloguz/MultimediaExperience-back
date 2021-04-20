const sql = require('./db')

const Admin = function(admin){
	this.correoAdm=admin.correoAdm
	this.contrasenia=admin.contrasenia
}

Admin.getAll=(results)=>{
	sql.query('SELECT correoAdm, contrasenia FROM admins_liga',(err, res)=>{
		if(err){
			console.log(`error: ${err}`)
			results(null, err)
			return;
		}
		console.log('admins: ',{res})
		results(null, res)
	})
}
module.exports = Admin;