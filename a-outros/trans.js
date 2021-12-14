

// routes.post('/empresa/save', admin, async (req, res) => {

// let {logradouro, numero, bairro, municipio, cep, razao, fantasia, cnpj, ie, csosnId} = req.body

// const t = await sequelize.transaction()

// try {

//   await sequelize.transaction(async (t) => {

//     let endereco = await Endereco.create({
//       logradouro: logradouro,
//       numero: numero,
//       bairro: bairro,
//       municipio: municipio,
//       cep: cep    
//     }, { transaction: t })
    
//     await endereco.setShooter({ 
//       logradouro: logradouro,
//       numero: numero,
//       bairro: bairro,
//       municipio: municipio,
//       cep: cep    
//       },{ transaction: t })

//     return endereco;

//   });

  
//   // razao: razao,
//   // fantasia: fantasia,
//   // cnpj: cnpj,
//   // ie: ie,
//   // enderecoId: endereco.id,
//   // csosnId: csosnId

//   // If the execution reaches this line, the transaction has been committed successfully
//   // `result` is whatever was returned from the transaction callback (the `user`, in this case)

//   } catch (error) {

//   // If the execution reaches this line, an error occurred.
//   // The transaction has already been rolled back automatically by Sequelize!

//   }
   

// res.redirect('/empresa')

// })
