const express = require('express')
let cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Multimedia Experience API' })
})
const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})
