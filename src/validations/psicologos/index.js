const create = require("./create");
const getOne = require("./getOne");
const destroy = require("./destroy");
const update = require("./update");

const PsicologoValidation = {
  create,
  getOne,
  destroy,
  update,
};

module.exports = PsicologoValidation;
