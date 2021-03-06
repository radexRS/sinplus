'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('size',
    [
      {
        "size":"1 ou 13", 
        "description":"Menino - 0 a 2 meses - Menina - 0 a 2 meses - 9 cm",
        "status": 1, 
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"2 ou 14",
        "description":"Menino - 2 a 3 meses - Menina - 2 a 4 meses - 10 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"3 ou 15",
        "description":"Menino - 3 a 4 meses - Menina - 4 a 6 meses - 10,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"4 ou 16",
        "description":"Menino - 4 a 6 meses - Menina - 6 a 8 meses - 11 cm",
        "status": 1, "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"17",
        "description":"Menino - 6 a 8 meses - Menina - 8 a 10 meses - 11,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"18",
        "description":"Menino - 8 a 10 meses - Menina - 10 a 12 meses - 12,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"19",
        "description":"Menino - 10 a 12 meses - Menina - 1 ano -13 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"20",
        "description":"Menino - 1 ano - Menina - 1 ano a 1 ano e meio - 13,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"21",
        "description":"Menino - 1 ano a 1 ano e meio  - Menina - 1 ano e meio a 2 anos - 14 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"22",
        "description":"Menino - 1 ano e meio a 2 anos - Menina - 2 ano a 2 ano e meio - 15 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"23",
        "description":"Menino - 2 anos - Menina - 2 anos e meio a 3 anos - 15,5 cm",
        "status": 1,
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"24",
        "description":"Menino - 2 anos a 2 anos e meio - Menina - 3 anos a 3 anos e meio - 16 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"25",
        "description":"Menino - 3 anos a 3 anos e meio - Menina - 3 anos e meio a 4 anos - 16,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"26",
        "description":"Menino - 3 anos e meio a 4 anos - Menina - 4 anos - 17 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"27",
        "description":"Menino - 4 a 5 anos - Menina - 5 anos - 18 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"28",
        "description":"Menino - 5 anos e meio- Menina - 5 anos e meio - 19,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"29",
        "description":"Menino - 5 anos e meio a 6 anos - Menina - 5 anos e meio a 6 anos - 20 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"30",
        "description":"Menino - 6 anos - Menina - 6 anos - 21 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"31",
        "description":"Menino - 7 anos - 7 anos  - 22 cm","status": 1,
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"32",
        "description":"Menino - 8 anos - Menina - 7 anos e meio a 8 anos - 22,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"33",
        "description":"Menino - 9 anos - Menina - 8 anos - 23 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"34",
        "description":"Menino - 9 anos e meio a 10 anos - Menina - 9 anos - 23,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"35",
        "description":"Menino - 10 anos em diante - Menina - 10 anos - 24 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      },
      {
        "size":"36",
        "description":"Menino - Acima de 11 anos - Menina - Acima de 10 anos - 24,5 cm",
        "status": 1,
        "createdAt":"2021-12-01 23:23:00",
        "updatedAt":"2021-12-01 23:23:00"
      }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
