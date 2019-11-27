
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Promotions', {
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
    city: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,

    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    programId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Promotions'),
};
