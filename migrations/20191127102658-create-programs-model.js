'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Programs', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          type: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          content: {
            type: Sequelize.STRING,
          },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
    });
  },
  down: (queryInterface, ) => {
    return queryInterface.dropTable('Programs');
  }
};
