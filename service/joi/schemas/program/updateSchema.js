const Joi = require('@hapi/joi');

const update = Joi.object({
  id: Joi.number()
    .integer()
    .required(),

  title: Joi.string()
    .alphanum()
    .required(),

}).required();

module.exports = update;
