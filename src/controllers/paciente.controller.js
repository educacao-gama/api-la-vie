const { Pacientes, Atendimentos } = require("../models");

const PacienteController = {
  async create(req, res) {
    try {
      const newPaciente = await Pacientes.create({
        ...req.body,
      });

      return res.status(201).json(newPaciente);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;

      await Pacientes.update(req.body, {
        where: { id },
      });

      const pacientes = await Pacientes.findByPk(id);

      return res.status(200).json(pacientes);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const hasAtendimentos = await Atendimentos.count({
        where: {
          paciente_id: id,
        },
      });

      if (hasAtendimentos) {
        return res
          .status(401)
          .json(
            "Existe atendimentos associados a esse paciente, não é possivel deletar!"
          );
      }

      await Pacientes.destroy({
        where: {
          id,
        },
      });

      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async getAll(req, res) {
    try {
      const pacientes = await Pacientes.findAll();

      return res.json(pacientes);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const paciente = await Pacientes.findByPk(id);

      return res.json(paciente);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
};

module.exports = PacienteController;
