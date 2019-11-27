
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RssFeeds', {
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
    link: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
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
  down: (queryInterface) => queryInterface.dropTable('RssFeeds'),
};
