const Sequelize = require('sequelize')
const Usuario = require('../entity/Usuario')

const Cfop = require('../entity/Cfop')
const CfopType = require('../entity/CfopType')
const CfopGroup = require('../entity/CfopGroup')
const CfopAll = require('../entity/CfopAll')


const Csosn = require('../entity/Csosn')
const Endereco = require('../entity/Endereco')

const Empresa = require('../entity/Empresa')

const Ncms = require('../entity/Ncms')
const Unity = require('../entity/Unity')

const Product = require('../entity/Product')


const connection = new Sequelize('dbtcc', 'root', 'rada', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

Usuario.init(connection)

Csosn.init(connection)

Cfop.init(connection)
CfopType.init(connection)
CfopGroup.init(connection)
CfopAll.init(connection)

Ncms.init(connection)

Unity.init(connection)

Endereco.init(connection)
Empresa.init(connection)

Product.init(connection)


connection.sync({force: false})

module.exports = connection