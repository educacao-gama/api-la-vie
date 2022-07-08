const { Pacientes, Atendimentos, Psicologos } = require("../models");

const AtendimentoController = {
  async create(req, res) {
    try {
      const { id: psicologo_id } = req.auth;
      const { paciente_id } = req.body;

      const hasPaciente = await Pacientes.count({ where: { id: paciente_id } });

      if (!hasPaciente)
        return res.status(400).json("Não existe o paciente com o id informado");

      const newAtendimento = await Atendimentos.create({
        ...req.body,
        psicologo_id,
      });

      return res.status(201).json(newAtendimento);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },

  async getAll(req, res) {
    try {
      const atendimentos = await Atendimentos.findAll();

      return res.json(atendimentos);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const atendimento = await Atendimentos.findByPk(id);

      return res.json(atendimento);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
};

module.exports = AtendimentoController;
