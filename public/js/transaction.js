const express = require('express')

const { Sequelise, sequelize} = require('../../models')

// const autorizacao = require('../autorizacao/autorizacao')
// const admin = require('../autorizacao/admin')
// const routes = express.Router()

// const Csosn = require('../model/entity/Csosn')
// const CsosnDAO = require('../model/dao/CsosnDAO')

// const Endereco = require('../model/entity/Endereco')
// const EnderecoDAO = require('../model/dao/EnderecoDAO')

// const Empresa = require('../model/entity/Empresa')
// const EmpresaDAO = require('../model/dao/EmpresaDAO')

const { Transaction } = require('sequelize');


const create = async () => {

    try {

        const t = await sequelize.transaction({
            isolationLevel: Sequelize.Transacation.READ_UNCOMMITTED
        })
        return Promise.resolve({
            status: true,
            data: t
        })

    } // Fim try
        catch (error) {
        return Promise.reject({
            status: false,
            error
        }) // Fim Pomesi
    } // Fim catch
} // Fim create

const commit = async transaction => {
    try {
        await transaction.commit()
        return Promise.resolve({
            status: true
        })
    } catch (error) {
        await rollback(transaction)
        return Promise.reject({
            status: false,
            error
        })
        
    }
} //Fim commit

const rollback = async transaction => {
    try {
        await transaction.rollback()
    }catch (error) {
        return Promise.reject({
            status: false,
            error
        })
        
    }
} // Fim rollback

module.exports = {
    create, commit, rollback
}