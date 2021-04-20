const Admin = require('../models/admin.model')

exports.findAll =(req,res)=>{
	Admin.getAll((err,data)=>{
		if(err){
			res.status(500).send(
				{
					message:
					err.message||'Some error occurred while retrieving your password or email.'
				}
			)
		}
		else{
			res.send(data)
		}
		
	})
}