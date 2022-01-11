const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const empresa = require('../autorizacao/empresa')
const routes = express.Router()

const Produto = require('../model/entity/Produto')
const ProdutoDAO = require('../model/dao/ProdutoDAO') 

const Venda = require('../model/entity/Venda')
const VendaDAO = require('../model/dao/VendaDAO')

routes.get('/venda', autorizacao, empresa, (req, res) => {
    res.render('venda/venda', {msg: '', usuario: req.session.usuario, empresa: req.session.empresa})
})


routes.get('/buscaProduto', async (req, res) => {

    let codigo = req.query.codigo

    console.log('req params: ', req.query.codigo)

    let produtoDAO = new ProdutoDAO()
    let produto = await produtoDAO.getOne(codigo)

     console.log('produtoDAO : ', produtoDAO)
     console.log('produto : ', produto)

    return res.json(produto)
    
    
})

routes.get('/vendaFim', async (req, res) => {

    let venda = req.query.venda
    let items = req.query.items

    console.log('vendaFim: ', venda.empresaId, venda.usuarioId, venda.total, items )

})

module.exports = routes