const update = require('./updateSchema');
const create = require('./createSchema');
const deleteSchema = require('./deleteSchema');

const programSchemas = {
  update,
  create,
  deleteSchema,
};

module.exports = programSchemas;
