'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Allgames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
         teamA: {
        type: Sequelize.STRING
      },
      teamB: {
        type: Sequelize.STRING
      },
      ScoreA: {
        type: Sequelize.INTEGER
      },
      ScoreB: {
        type: Sequelize.INTEGER
      },
      Time: {
        type: Sequelize.DATE
      },
      Category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Allgames');
  }
};
