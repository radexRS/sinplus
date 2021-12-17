const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const admin = require('../autorizacao/admin')
const routes = express.Router()

const Usuario = require('../model/entity/Usuario')
const UsuarioDAO = require('../model/dao/UsuarioDAO')

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Empresa  = require('../model/entity/Empresa')
const EmpresaDAO = require('../model/dao/EmpresaDAO')

const Empuser = require('../model/entity/Empuser')
const EmpuserDAO = require('../model/dao/EmpuserDAO')

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

routes.get('/empresaUsuario', admin, async (req, res) => {

    let usuarioDAO = new UsuarioDAO()
    let usuarios = await usuarioDAO.getAll()

    let empresaDAO = new EmpresaDAO()
    let empresas = await empresaDAO.getAll()

    res.render('empresaUsuario/empresaUsuario', {usuarios: usuarios, empresas: empresas, usuario: req.session.usuario, msg: '' })

})

routes.post('/empresaUsuario/save', admin, async (req, res) => {

    let usuarioDAO = new UsuarioDAO()
    let usuarios = await usuarioDAO.getAll()

    let empresaDAO = new EmpresaDAO()
    let empresas = await empresaDAO.getAll()

    let {empresaId, usuarioId} = req.body

 

    let empuserDAO = new EmpuserDAO()
    let empuser = await empuserDAO.create(empresaId, usuarioId)

    if (empuser) { res.render('empresaUsuario/empresaUsuario', {empresas: empresas, usuarios: usuarios, msg: 'Cadastro Realizado com Sucesso!!'}) }
    else { 
            
        res.render('empresaUsuario/empresaUsuario', {empresas: empresas, usuarios: usuarios, msg: 'Falha no Cadastro! Verifique combinacão de Empresa Usuário '})}
    

})


module.exports = routes