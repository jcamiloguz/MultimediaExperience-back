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
  sql.query(
		
    'SELECT id_user,user_name, user_last_name, email, content_opinion, score, ROUND(DATEDIFF(CUrDate(),born_date )/365.25) as age   FROM multimedia_experience.users u, multimedia_experience.opinions o where o.id_user=u.id;',
    (err, res) => {
      if (err) {
        console.log(`error: ${err}`)
        results(null, err)
        return
      }
      console.log('Users: ', { res })
      results(null, res)
    }
  )
}
User.getAllAge = (results) => {
  sql.query(
    `SELECT id, round( DATEDIFF(CUrDate(),born_date )/365.25,-1) as age, count(round( DATEDIFF(CUrDate(),born_date )/365.25,-1) ) as quantity from multimedia_experience.users group by age;`,
    (err, res) => {
      if (err) {
        console.log(`error: ${err}`)
        results(null, err)
        return
      }
      console.log('ages: ', { res })
      results(null, res)
    }
  )
}
User.getQuestion = (results) => {
  let resFinal
  sql.query(
    `SELECT  id_user, id_question, COUNT(case id_option when 1 then 1 else null end) as option1,  COUNT(case id_option when 2 then 1 else null end) as option2 from multimedia_experience.answers WHERE id_question=1;`,
    (err, res) => {
      if (err) {
        console.log(`error: ${err}`)
        results(null, err)
        return
      }
      resFinal = { ...resFinal, question1: res[0] }
			sql.query(
				`SELECT  id_user, id_question, COUNT(case id_option when 3 then 1 else null end) as option1,  COUNT(case id_option when 4 then 1 else null end) as option2 from multimedia_experience.answers WHERE id_question=2;`,
				(err, res) => {
					if (err) {
						console.log(`error: ${err}`)
						results(null, err)
						return
					}
					resFinal = { ...resFinal, question2: res[0] }
					sql.query(
						`SELECT  id_user, id_question, COUNT(case id_option when 5 then 1 else null end) as option1,  COUNT(case id_option when 6 then 1 else null end) as option2 from multimedia_experience.answers WHERE id_question=3;`,
						(err, res) => {
							if (err) {
								console.log(`error: ${err}`)
								results(null, err)
								return
							}
							resFinal = { ...resFinal, question3: res[0] }
							sql.query(
								`SELECT  id_user, id_question, COUNT(case id_option when 7 then 1 else null end) as option1,  COUNT(case id_option when 8 then 1 else null end) as option2 from multimedia_experience.answers WHERE id_question=4;`,
								(err, res) => {
									if (err) {
										console.log(`error: ${err}`)
										results(null, err)
										return
									}
									resFinal = { ...resFinal, question4: res[0] }
									results(null, resFinal)
								}
							)
						}
					)
				}
			)
    }
  )


  
}
module.exports = User
