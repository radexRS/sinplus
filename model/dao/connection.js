const Sequelize = require('sequelize')
const Usuario = require('../entity/Usuario')

const Cfop = require('../entity/Cfop')
const CfopType = require('../entity/CfopType')
const CfopGroup = require('../entity/CfopGroup')



const Csosn = require('../entity/Csosn')
const Endereco = require('../entity/Endereco')

const Empresa = require('../entity/Empresa')

const Empuser = require('../entity/Empuser')

const Ncms = require('../entity/Ncms')
const Unidade = require('../entity/Unidade')

const Produto = require('../entity/Produto')

const Venda = require('../entity/Venda')
const Itenvenda = require('../entity/Itenvenda')


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

Ncms.init(connection)

Unidade.init(connection)

Endereco.init(connection)
Empresa.init(connection)

Empuser.init(connection)

Produto.init(connection)

// Venda.init(connection)
// Itenvenda.init(connection)

connection.sync({force: false})

module.exports = connection