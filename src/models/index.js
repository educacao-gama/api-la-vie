const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Pacientes.belongsToMany(Psicologos, {
  foreignKey: "paciente_id",
  through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
  foreignKey: "psicologo_id",
  through: Atendimentos,
});

module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos,
};
