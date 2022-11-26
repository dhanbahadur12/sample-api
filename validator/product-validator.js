const Joi = require('joi');

const create = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().required()
});

const checkParams = Joi.object({
    id: Joi.number().required().greater(0).positive()
})

const productSchema = {
    create,
    checkParams
}

module.exports = productSchema;