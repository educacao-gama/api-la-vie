const db = require("../database");
const { DataTypes } = require("sequelize");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
  "Atendimentos",
  {
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id",
      },
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimentos",
  }
);

module.exports = Atendimentos;
