const CfopALL = require('../entity/CfopALL')

class CfopAllDAO{


    async getOne(id) {
        try{
            return await CfopAll.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await CfopAll.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CfopAllDAO