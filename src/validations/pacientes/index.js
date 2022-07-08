const create = require("./create");
const getOne = require("./getOne");
const update = require("./update");
const destroy = require("./destroy");

const PacienteValidation = {
  create,
  getOne,
  update,
  destroy,
};

module.exports = PacienteValidation;
