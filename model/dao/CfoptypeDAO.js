const CfopTypeType = require('../entity/CfopTypeType')

class CfopTypeDAO{


    async getOne(id) {
        try{
            return await CfopType.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await CfopType.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CfopTypeDAO