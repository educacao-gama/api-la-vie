const express = require("express");
const AtendimentoController = require("../controllers/atendimento.controller");
const AuthController = require("../controllers/auth.controller");
const PacienteController = require("../controllers/paciente.controller");
const PsicologoController = require("../controllers/psicologo.controller");

const auth = require("../middlewares/auth");
const AtendimentoValidation = require("../validations/atendimentos");
const loginValidation = require("../validations/auth");
const PacienteValidation = require("../validations/pacientes");
const PsicologoValidation = require("../validations/psicologos");
const routes = express.Router();

routes.get("/psicologos", PsicologoController.getAll);
routes.get(
  "/psicologos/:id",
  PsicologoValidation.getOne,
  PsicologoController.getOne
);
routes.post(
  "/psicologos",
  PsicologoValidation.create,
  PsicologoController.create
);
routes.delete(
  "/psicologos/:id",
  PsicologoValidation.destroy,
  PsicologoController.delete
);
routes.put(
  "/psicologos/:id",
  PsicologoValidation.update,
  PsicologoController.update
);

routes.get("/pacientes", PacienteController.getAll);
routes.get(
  "/pacientes/:id",
  PacienteValidation.getOne,
  PacienteController.getOne
);
routes.post("/pacientes", PacienteValidation.create, PacienteController.create);
routes.delete(
  "/pacientes/:id",
  PacienteValidation.destroy,
  PacienteController.delete
);
routes.put(
  "/pacientes/:id",
  PacienteValidation.update,
  PacienteController.update
);

routes.get("/atendimentos", auth, AtendimentoController.getAll);
routes.get(
  "/atendimentos/:id",
  auth,
  AtendimentoValidation.getOne,
  AtendimentoController.getOne
);
routes.post(
  "/atendimentos",
  auth,
  AtendimentoValidation.create,
  AtendimentoController.create
);

routes.post("/login", loginValidation.login, AuthController.login);

module.exports = routes;
