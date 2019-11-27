const rssFeedSchemas = require('./rssFeed/index');
const promotionSchemas = require('./promotion/index');
const userSchemas = require('./user/index');
const programSchemas = require('./program/index');

const schemas = {
  rssFeedSchemas,
  promotionSchemas,
  programSchemas,
  userSchemas,
};

module.exports = schemas;
