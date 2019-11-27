const Joi = require('@hapi/joi');

const update = Joi.object({
  id: Joi.number()
    .integer()
    .required(),

  title: Joi.string(),

  link: Joi.string(),

  description: Joi.string(),
}).required();

module.exports = update;
