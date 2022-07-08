const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    paciente_id: Joi.string().required(),
    observacao: Joi.string().required(),
    data_atendimento: Joi.date().iso().required(),
  }),
});
