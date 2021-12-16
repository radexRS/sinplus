const  Sequelize = require('sequelize')
const Endereco = require('./Endereco')
const Csosn = require('./Csosn')

class Empresa extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: 
                    {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    razao: 
                    {
                        type: Sequelize.STRING,
                        unique: true
                    },

                    fantasia: 
                    {
                        type: Sequelize.STRING
                    },

                    cnpj: 
                    {
                        type: Sequelize.BIGINT,
                        unique: true
                    },

                    ie: 
                    {
                        type: Sequelize.BIGINT,
                        unique: true
                    },

                    status: 
                    {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }                    
                                     
                },
                
                {
                    sequelize,
                    modelName: 'empresa',
                    freezeTableName: true
                }

            )

            Empresa.relations()
        }

        
        static relations(){
            Endereco.hasOne(Empresa, {  onDelete: 'RESTRICT',  onUpdate: 'CASCADE'})    
            Empresa.belongsTo(Endereco) 
            
            Csosn.hasOne(Empresa, {  onDelete: 'RESTRICT',  onUpdate: 'CASCADE'})
            Empresa.belongsTo(Csosn)
            
        }
        
}

module.exports = Empresa