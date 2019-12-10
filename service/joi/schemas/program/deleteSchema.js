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

  updatedAt: Joi.string(),

  createdAt: Joi.string(),
}).required();

module.exports = create;
