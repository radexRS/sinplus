const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const empresa = require('../autorizacao/empresa')
const routes = express.Router()

const Produto = require('../model/entity/Produto')
const ProdutoDAO = require('../model/dao/ProdutoDAO') 

const Venda = require('../model/entity/Venda')
const VendaDAO = require('../model/dao/VendaDAO')

const Itemvenda = require('../model/entity/Itemvenda')
const ItemvendaDAO = require('../model/dao/ItemvendaDAO')

const { Sequelise, sequelize} = require('../models')

const { Transaction, where } = require('sequelize')

const { Op } = require("sequelize");


routes.get('/venda', autorizacao, empresa, (req, res) => {
    res.render('venda/venda', {msg: '', usuario: req.session.usuario, empresa: req.session.empresa})
})


routes.get('/buscaProduto', async (req, res) => {

    let codigo = req.query.codigo
    let quantidade = req.query.quantidade

    if (codigo)
    {
        console.log("Código is integer?", Number.isInteger(codigo))
    }

    console.log('req params código:  ', req.query.codigo, 'req paramms quantidade: ', quantidade)

    let produtoDAO = new ProdutoDAO()
    let produto = await produtoDAO.getOne(codigo)

     console.log('produtoDAO : ', produtoDAO)
     console.log('produto : ', produto)

    return res.json(produto)
    
    
})

routes.post('/vendaFim', autorizacao, empresa, async (req, res) => {

    let {venda, items} = req.body
    let itemsvenda = []
    // console.log('Venda :', venda, 'Items: ', items)
    // console.log(Object.values(venda))
    
    console.log("Venda: ",venda)
    console.log("Items: ", items)

    parseFloat(venda.total)
    parseInt(venda.usuarioId)
    parseInt(venda.empresaId)

    parseInt(items.vendaId)
    parseInt(items.empresaId)
    parseInt(items.usuarioId)
    parseInt(items.produtoId)
    parseFloat(items.quantidade)
    parseFloat(items.total)


// Transaction

    const t = await sequelize.transaction();

    try {  
    
      let sale = await Venda.create( {
          total: venda.total, 
          usuarioId: venda.usuarioId,
          empresaId: venda.empresaId
        },{transaction: t})
  


        items.forEach(function(item){
          itemsvenda.push( {csosn: item.csosn, cfop: item.cfop, quantidade: item.quantidade, total: item.total, vendaId: sale.id, empresaId: item.empresaId, usuarioId: item.usuarioId, produtoId: item.produtoId })

        })


        await Itemvenda.bulkCreate( itemsvenda,{transaction: t})
    
        await t.commit()
    
      } catch (error) {
            await t.rollback()
            
          }
   

})

module.exports = routes