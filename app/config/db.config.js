require('dotenv').config()
const data = {
  HOST: process.env.HOST,
  USER: process.env.USERDB,
  PASSWORD: process.env.PASS,
  DB: process.env.DB,
}
console.log(data)
module.exports = data
