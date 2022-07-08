const { Psicologos, Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const PsicologoController = {
  async create(req, res) {
    try {
      const { senha } = req.body;

      const newSenha = bcrypt.hashSync(senha, 10);

      const newPsicologo = await Psicologos.create({
        ...req.body,
        senha: newSenha,
      });

      return res.status(201).json(newPsicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { senha } = req.body;
      const payloadUpdate = {};

      Object.assign(payloadUpdate, req.body);

      if (senha) {
        const newSenha = bcrypt.hashSync(senha, 10);
        Object.assign(payloadUpdate, { senha: newSenha });
      }

      await Psicologos.update(payloadUpdate, {
        where: { id },
      });

      const psicologo = await Psicologos.findByPk(id);

      return res.status(200).json(psicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const hasAtendimentos = await Atendimentos.count({
        where: {
          psicologo_id: id,
        },
      });

      if (hasAtendimentos) {
        return res
          .status(401)
          .json(
            "Existe atendimentos associados a esse psicologo, não é possivel deletar!"
          );
      }

      await Psicologos.destroy({
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
      const psicologos = await Psicologos.findAll();

      return res.json(psicologos);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const psicologo = await Psicologos.findByPk(id);

      return res.json(psicologo);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame o batman!");
    }
  },
};

module.exports = PsicologoController;
