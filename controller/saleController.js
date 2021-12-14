const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const routes = express.Router()

routes.get('/sale', autorizacao, (req, res) => {
    res.render('sale/sale', {msg: '', user: req.session.user})
})


module.exports = routes