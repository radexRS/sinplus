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

routes.post('/vendaFim', async (req, res) => {

    let {venda, items} = req.body

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
    
      await Itemvenda.bulkCreate( [ { 
          csosn: items.csosn,
          cfop: items.cfop,
          quantidade: items.quantidade,
          total: items.total,
          vendaId: sale.id,
          empresaId: items.empresaId,
          usuarioId: items.usuarioId,
          produtoId: items.produtoId
        }],{transaction: t})
    
         await t.commit()
    
        //  let empresaDAO = new EmpresaDAO()
        //  let empresas = await empresaDAO.getAll()
         
        //  res.render('empresa/empresa', {empresas: empresas, msg: 'Empresa Cadastrada com Sucesso!', usuario: req.session.usuario })
    
        //  let csosnDAO = new CsosnDAO()
        //  let csosns = await csosnDAO.getAll()
    
        //  res.render('empresa/empresa', {msg: 'Empresa Cadastrada com Sucesso!', csosns: csosns, usuario: req.session.usuario })
    
      } catch (error) {
            await t.rollback()
    
            // let empresaDAO = new EmpresaDAO()
            // let empresas = await empresaDAO.getAll() 
            
            // res.render('empresa/empresa', {empresas: empresas, msg: 'Dados não consistem, Verifique unicidade dos campos.', usuario: req.session.usuario })
    
            // let csosnDAO = new CsosnDAO()
            // let csosns = await csosnDAO.getAll()
       
            // res.render('empresa/empresa', {msg: 'Dados não consistem, Verifique unicidade dos campos.', csosns: csosns, usuario: req.session.usuario })
            
          }




    

})

module.exports = routes