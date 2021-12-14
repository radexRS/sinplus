const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const admin = require('../autorizacao/admin')
const routes = express.Router()
// const useradmin = req.session.usuario

routes.get('/', (req, res) => {
    res.render('login', {msg: ''})
})


routes.get('/index', autorizacao, (req, res) => {
    res.render('index', {usuario: req.session.usuario, msg: ''})
})

routes.get('/admin', admin, (req, res) => {
    res.render('admin/admin', {usuario: req.session.usuario, msg: ''})
})


module.exports = routes