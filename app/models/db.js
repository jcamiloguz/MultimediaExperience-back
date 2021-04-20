const mysql = require('mysql')
const dbConfig = require('../config/db.config')

const connection = mysql.createPool(
	{
		connectionLimit : 1000,
        connectTimeout  : 60 * 60 * 1000,
        acquireTimeout  : 60 * 60 * 1000,
        timeout         : 60 * 60 * 1000,
		host:dbConfig.HOST,
		user:dbConfig.USER,
		password:dbConfig.PASSWORD,
		database:dbConfig.DB
	}
)
// connection.connect(err=>{
// 	if(err)throw err;
// 	console.log("Successfully connected to the trygoal database.")
// })
module.exports=connection