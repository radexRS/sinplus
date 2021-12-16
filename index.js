const express = require('express')
const formataData = require('./public/js/utils/util')
const session = require('express-session');
const connection = require('./model/dao/connection')
const admController = require('./controller/admController')
const usuarioController = require('./controller/usuarioController')


const cfopController = require('./controller/cfopController')
const cfopTypeController = require('./controller/cfopTypeController')
const cfopGroupController = require('./controller/cfopGroupController')
const cfopAllController = require('./controller/cfopAllController')

const csosnController = require('./controller/csosnController')

// const enderecoController = require('./controller/enderecoControler')


const unidadeController = require('./controller/unidadeController')

const ncmsController = require('./controller/ncmsController')

const produtoController = require('./controller/produtoController')

const vendaController = require('./controller/vendaController')

const empresaController = require('./controller/empresaController')
                        
const app = express()


const autorizacao = require("./autorizacao/autorizacao")
const admin = require("./autorizacao/admin")

app.use(session({ secret: "Um%55kjds", resave: true, saveUninitialized: true }));

app.use(express.urlencoded(({ extended: true })))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(express.json())

app.use(admController, 
        usuarioController,
        cfopController, 
        cfopTypeController,
        cfopGroupController,
        cfopAllController,
        csosnController,
        empresaController,
        unidadeController,
        ncmsController,
        produtoController,
        vendaController)

app.listen(3000, () => {
    console.log('Aplicação em execução na porta 3000.')
})

