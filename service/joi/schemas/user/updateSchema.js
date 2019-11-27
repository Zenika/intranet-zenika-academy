const Joi = require('@hapi/joi');

const update = Joi.object({
    id: Joi.number()
        .integer()
        .required(),

    firstName: Joi.string()
        .required(),

    lastName: Joi.string()
        .required(),

    email: Joi.string()
        .required(),

    role: Joi.string()
        .required(),
}).required();

module.exports = update;
