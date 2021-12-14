const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const CfopGroup = require('../model/entity/CfopGroup')
const CfopGroupDAO = require('../model/dao/CfopGroupDAO')

const routes = express.Router()


routes.get('/cfopGroup', autorizacao, async (req, res) => {
    
    let cfopgroupDAO = new CfopGroupDAO()
    let cfopgroups = await cfopgroupDAO.getAll()
    res.render("cfop/cfopGroup", { user: req.session.user, cfopgroups: cfopgroups })  
})



module.exports = routes