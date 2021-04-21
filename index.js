const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Multimedia Experience API' })
})
const PORT = process.env.PORT || 9000
require('./app/routes/admin.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/school.routes')(app)
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})
