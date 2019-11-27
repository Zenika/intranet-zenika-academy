const Joi = require('@hapi/joi');

module.exports = {
    joiObjectValidator: (schema, property) => {
        return (req, res, next) => {
            const { error, value } = schema.validate(req.body);
            const valid = error == null;

            if (valid) {
                res.locals[property] = value;
                next();
            } else {
                const { details } = error;
                const message = details.map(i => i.message).join(',');

                console.log("error", message);
                res.status(422).json({ error: message }) }
        }
    },

    joiIdValidator: (property) => {
        return (req, res, next) => {
            const schema = Joi.object({
                id: Joi.number()
                    .integer()
                    .required()
            });
            const { error, value } = schema.validate({ id: parseInt(req.params[property]) });
            const valid = error == null;

            if (valid) {
                res.locals[property] = value.id;
                next();
            } else {
                const { details } = error;
                const message = details.map(i => i.message).join(',');

                console.log("error", message);
                res.status(422).json({ error: message }) }
        }
    },
};
