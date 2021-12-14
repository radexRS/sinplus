const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const admin = require('../autorizacao/admin')
const routes = express.Router()

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Endereco = require('../model/entity/Endereco')
const EnderecoDAO = require('../model/dao/EnderecoDAO')

const Empresa = require('../model/entity/Empresa')
const EmpresaDAO = require('../model/dao/EmpresaDAO')


// const { Sequelize, sequelize } = require('sequelize')

const { Sequelise, sequelize} = require('../models')

//const { Transaction, where } = require('sequelize')

const { Op } = require("sequelize");

routes.get('/empresa', admin, async (req, res) => {

    let csosnDAO = new CsosnDAO()
    let csosns = await csosnDAO.getAll()

    res.render('empresa/empresa', {csosns: csosns, usuario: req.session.usuario, msg: ''})
})

routes.post('/empresa/save', admin, async (req, res) => {

  
  let {logradouro, numero, bairro, municipio, cep, razao, fantasia, cnpj, ie, csosnId} = req.body


  parseInt(cnpj)
  parseInt(ie)
  parseInt(csosnId)

  

  const t = await sequelize.transaction();

try {  

  let enderecoempresa = await Endereco.create( {
      logradouro: logradouro, 
      numero: numero, 
      bairro: bairro, 
      municipio, municipio,
      cep: cep
    },{transaction: t})

    

    await Empresa.create( {
      razao: razao,
      fantasia: fantasia,
      cnpj: cnpj,
      ie: ie,
      enderecoId: enderecoempresa.id,
      csosnId: csosnId
    },{transaction: t})



     await t.commit()

  } catch (error) {
        await t.rollback()
        console.log(error.toString());
      }



  
//   async function create(req, res, next) {

//     try {
//       const  { data  } = req.body

//       const transaction = await t.create()
//       if (!transaction.status && transaction.error) {
//         throw transaction.error
//       }

//       const createEndereco = await Endereco.bulkCreate(data, { transaction: transaction.data })
//       if (!createEndereco) {
//         // rollback
//         await t.rollback(transaction.data)
//         res.status(400).send({
//           status: 'error',
//           message: 'Falha em criar Endereço'
//         })
//       }

//       // commit
//       const commit = await t.commit(transaction.data)
//       if (!commit.status && commit.error) {
//         throw commit.error
//       }
//       res.status(201).send({
//         status: 'success',
//         data: createEndereco
//       })

//     } catch (error) {
//       next(error)
//     } // Fim catch

    

//   } // Fim create


res.redirect('/empresa')




}) // Fim rota



module.exports = routes