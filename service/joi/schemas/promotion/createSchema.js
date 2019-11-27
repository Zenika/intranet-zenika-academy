const Joi = require('@hapi/joi');

const create = Joi.object({
  title: Joi.string()
    .alphanum()
    .required(),

  link: Joi.string()
    .alphanum()
    .required(),

  description: Joi.string()
    .alphanum()
    .required(),
}).required();

module.exports = create;
