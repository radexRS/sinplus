'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('procuttype',
    [
      {"procutType":"Bota","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Chanel","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Chuteira","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Clogue","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Chinelo","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Crock","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Mocassin","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Mule","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Pantufa","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Papete","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Peep Toe","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},   
      {"procutType":"Rasteirinha","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Sandalia","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Sandatenis","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Sapatenis","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Sapatilha","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},   
      {"procutType":"Sapato","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Scarpan","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Slipper","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Sneaker","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Summer Boots","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},  
      {"procutType":"Tamanco","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"},
      {"procutType":"Tênis","status":1,"createdAt":"2021-12-01 23:23:00","updatedAt":"2021-12-01 23:23:00"}   
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
