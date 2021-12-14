const CfopGroup = require('../entity/CfopGroup')

class CfopGroupDAO{


    async getOne(id) {
        try{
            return await CfopGroup.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await CfopGroup.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CfopGroupDAO