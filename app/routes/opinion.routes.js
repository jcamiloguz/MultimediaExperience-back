module.exports = (app) => {
  const Opinion = require('../controllers/opinion.controller.js')
  app.post('/opinion', Opinion.create)
  app.get('/opinion', Opinion.findAll)
}
