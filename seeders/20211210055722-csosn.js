'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('csosn',
    [
      {
          "csosn":"101",
          "descricao":"Tributada pelo Simples Nacional com permissão de crédito"
      },
      {
          "csosn":"102",
          "descricao":"Tributada pelo Simples Nacional sem permissão de crédito"
      },
      {
          "csosn":"103",
          "descricao":"Isenção do ICMS no Simples Nacional para faixa de receita bruta"
      },
      {
          "csosn":"201",
          "descricao":"Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária"
      },
      {
          "csosn":"202",
          "descricao":"Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária"
      },
      {
          "csosn":"203",
          "descricao":"Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária"
      },
      {
          "csosn":"300",
          "descricao":"Imune"
      },
      {
          "csosn":"400",
          "descricao":"Não tributada pelo Simples Nacional"
      },
      {
          "csosn":"500",
          "descricao":"ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação"
      },
      {
          "csosn":"900",
          "descricao":"Outros"
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
