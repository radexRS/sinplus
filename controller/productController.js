const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const Product = require('../model/entity/Product')
const ProductDAO = require('../model/dao/ProductDAO')

const Cfop = require('../model/entity/Cfop')
const CfopDAO = require('../model/dao/CfopDAO')

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Unity = require('../model/entity/Unity')
const UnityDAO = require('../model/dao/UnityDAO')


const routes = express.Router()


routes.get('/product', autorizacao, async (req, res) => {

    let productDAO = new ProductDAO()
    let products = await productDAO.getAll()
        

    res.render("product/product", { user: req.session.user, products: products })
})


routes.get('/product/novo', autorizacao, async (req, res) => {


    let unityDAO = new UnityDAO()
    let unities = await unityDAO.getAll()

    let cfopDAO = new CfopDAO()
    let cfops = await cfopDAO.getAll()

    let csosnDAO = new CsosnDAO()
    let csosns = await csosnDAO.getAll()

    res.render("product/novo", { user: req.session.user, unities: unities, cfops: cfops, csosns: csosns })
})


routes.post('/product/save', autorizacao, async (req, res) => {
    let { ncm, cfop, csosn, description, cost, price, unityId } = req.body
    
        let productDAO = new ProductDAO()

        if (await productDAO.create(ncm, cfop, csosn, description, parseFloat(cost), parseFloat(price),unityId )) {
            res.redirect('/product')
        }
        else {res.render('erro', {msg: 'Falha na tentativa de cadastro de Produto.'})}
})



routes.get('/product/edit/:id', autorizacao, async (req, res) => {

    let id = req.params.id
    let productDAO = new ProductDAO()
    let product = await productDAO.getOne(id)

    let cfopDAO = new CfopDAO()
    let cfops = await cfopDAO.getAll()

    let csosnDAO = new CsosnDAO()
    let csosns = await csosnDAO.getAll()

    let unityDAO = new UnityDAO()
    let unities = await unityDAO.getAll()

    if (product) {
        res.render('product/edit', {product: product, cfops: cfops, csosns: csosns, unities: unities, user: req.session.user})
    }
    else res.render('erro', { msg: 'Falha na tentativa de busca dos dados da Unidade.' })
})


routes.post('/product/edit', autorizacao, async (req, res) => {
    let {id, ncm, cfop, csosn, description, cost, price, status, unityId } = req.body

    let productDAO = new ProductDAO()
    if ( await productDAO.update(id, ncm, cfop, csosn, description, cost, price, status, unityId )){
   
        res.redirect('/product')
    }
    else {res.render('erro', {msg: 'Falha na tentativa de edição da Unidade.'})}
})


routes.get('/product/excluir/:id', async (req,res) => {
    let id = req.params.id
    let productDAO = new ProductDAO()
    if (await productDAO.delete(id)){
        res.redirect('/product')
    }
    else {res.render('erro', {msg: 'Falha na tentativa de excluir Unidade.'})}
})



module.exports = routes