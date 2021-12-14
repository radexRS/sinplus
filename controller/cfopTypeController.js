const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const Cfop = require('../model/entity/Cfop')
const CfopDAO = require('../model/dao/CfopDAO')

const routes = express.Router()


routes.get('/cfopType', autorizacao, async (req, res) => {
    
    let cfopTypeDAO = new CfopTypeDAO()
    let cfopTypes = await cfopTypeDAO.getAll()
    res.render("cfop/cfopType", { user: req.session.user, cfopTypes: cfopTypes })  
})



module.exports = routes