module.exports = (app) => {
  const Answer = require('../controllers/answer.controller.js')
  app.post('/answer', Answer.create)
}
