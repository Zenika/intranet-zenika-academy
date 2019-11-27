const Joi = require('@hapi/joi');

const create = Joi.object({
  title: Joi.string()
    .alphanum()
    .required(),

  type: Joi.string()
    .alphanum()
    .required(),

  content: Joi.array().items(Joi.number()
    .integer()),
}).required();

module.exports = create;
