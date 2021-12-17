const  Sequelize = require('sequelize')
const Venda = require('./Venda')

class Itenvenda extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    
                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }
                },
                {
                    sequelize,
                    modelName: 'itenvenda',
                    freezeTableName: true
                }

            )

            Itenvenda.relations()
        }

        static relations(){
            
            Venda.hasOne(Itenvenda)
            Itenvenda.belongsTo(Venda)

        }
}

module.exports = Itenvenda