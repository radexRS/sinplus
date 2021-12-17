const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const routes = express.Router()

routes.get('/venda', autorizacao, (req, res) => {
    res.render('venda/venda', {msg: '', usuario: req.session.usuario})
})


module.exports = routes