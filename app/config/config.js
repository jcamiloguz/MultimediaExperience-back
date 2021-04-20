requiere("dotenv").config()
module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASS,
  DB: process.env.DB,
}
