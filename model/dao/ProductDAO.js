const Product = require('../entity/Product')
const Unity = require('../entity/Unity')

class ProductDAO{

    async create(ncm, cfop, csosn, description, cost, price, unityId) {
        
        try{
            await Product.create({ncm, cfop, csosn, description, cost, price, unityId})
            return true
        }
        catch(error){
            return false
        }
}


    async update(id, ncm, cfop, csosn, description, cost, price, status, unityId) {
        try{
            await Product.update({ ncm, cfop, csosn, description, cost, price, status, unityId }, { where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async delete(id) {  //id de req.params.id
        try{
            await Product.destroy({ where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async getOne(id) {
        try{
            return await Product.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await Product.findAll( { include: { model: Unity } } )
        }
        catch(error){
            return null
        }
    }

}


module.exports = ProductDAO