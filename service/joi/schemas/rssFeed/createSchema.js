const Joi = require('@hapi/joi');

const create = Joi.object({
    title: Joi.string()
        .required(),

    link: Joi.string()
        .required(),

    description: Joi.string()
        .required(),
}).required();

module.exports = create;
