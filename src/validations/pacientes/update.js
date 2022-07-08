const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    idade: Joi.date().iso(),
  }),
});
