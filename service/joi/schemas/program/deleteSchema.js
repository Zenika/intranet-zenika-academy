const Joi = require('@hapi/joi');

const create = Joi.object({
  id: Joi.number()
    .integer()
    .required(),

  title: Joi.string()
    .required(),

  type: Joi.number()
    .integer()
    .required(),

  content: Joi.array(),
}).required();

module.exports = create;
