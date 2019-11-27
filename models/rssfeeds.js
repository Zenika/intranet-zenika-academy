module.exports = (sequelize, DataTypes) => {
  const RssFeeds = sequelize.define('RssFeeds', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false

    },
    link: {
      type: DataTypes.STRING,
      allowNull: false

    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
    RssFeeds.associate = function(models) {
      // associations can be defined here
    };

  return RssFeeds;
};
