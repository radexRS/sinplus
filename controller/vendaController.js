const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const empresa = require('../autorizacao/empresa')
const routes = express.Router()

routes.get('/venda', autorizacao, empresa, (req, res) => {
    res.render('venda/venda', {msg: '', usuario: req.session.usuario, empresa: req.session.empresa})
})


module.exports = routes