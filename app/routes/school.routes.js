module.exports = (app) => {
  const School = require('../controllers/school.controller.js')
  app.post('/school', School.create)
  app.get('/school', School.findAll)
}
