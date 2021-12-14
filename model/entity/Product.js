const  Sequelize = require('sequelize')
const Unity = require('./Unity')

class Product extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    ncm: {
                        type: Sequelize.STRING
                    },   

                    cfop: {
                        type: Sequelize.STRING
                    },   

                    csosn: {
                        type: Sequelize.STRING
                    },   

                    description: {
                        type: Sequelize.STRING,
                        unique: true
                    },                 

                    cost: {
                        type: Sequelize.FLOAT
                    },                    
                    
                    price: {
                        type: Sequelize.FLOAT
                    },
                    
                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }
                },
                {
                    sequelize,
                    modelName: 'product',
                    freezeTableName: true
                }

            )

            Product.relations()
        }

        static relations(){
            
            Unity.hasOne(Product)
            Product.belongsTo(Unity)

        }
}

module.exports = Product