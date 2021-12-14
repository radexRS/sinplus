const { STRING } = require("sequelize/types")

install
npm install --save-dev sequelize-cli

init
npx sequelize-cli init

create folders

	config, contains config file, which tells CLI how to connect with database
	models, contains all models for your project
	migrations, contains all migration files
	seeders, contains all seed files

cria a migration  na pasta migrations
npx sequelize migration:generate --name create-ncm 

Gera arquivo de modelo na pasta models e arquivo de migração na pasta migrations

npx sequelize-cli model:generate --name ncms --attributes Codigo:String,Descricao:String,Data_Inicio:String,Data_Fim:String,Tipo_Ato:String,Numero_Ato:String,Ano_Ato:String      

sequelize model:generate --name Outra --attributes firstName:string,lastName:string,email:string


Executa as migrations gerando uma tabela SequelizeMeta no banco de dados que será usada nas migrações e
            Cria uma tabela chamada Usuários com todas as colunas conforme especificado em seu arquivo de migração.
          
npx sequelize-cli db:migrate

Você pode usar db: migrate: undo, este comando irá reverter a maioria da migração recente.
npx sequelize-cli db:migrate:undo


seed

cria seed - Um arquivo na pasta seed que deve ser editado
npx sequelize-cli seed:generate --name demo-user

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };

  Executa todas as seed
  npx sequelize-cli db:seed:all


  Desfaz a seed mais recente
  npx sequelize-cli db:seed:undo

Desfas todas seeds 
npx sequelize-cli db:seed:undo:all 