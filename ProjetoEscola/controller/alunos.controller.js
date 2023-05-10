const alunosRepository = require("../repository/alunos.repository");

module.exports = {
  buscaTodos: (req, res) => {
    alunosRepository
      .buscaTodos()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaPorId: (req, res) => {
    const { id } = req.params;

    if (!id) {
      res.status(404).send({ msg: "Parametro id obrigatorio!" });
    }

    alunosRepository
      .buscaPorId(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  inserir: (req, res) => {
    const alunos = req.body;

    if (alunos.length > 1) {
      res.send({
        msg: "Número de registros informado é maior que o permitido!",
      });
    }

    alunosRepository
      .inserir(alunos)
      .then(() => {
        res.send({
          msg: "Alunos inseridos com sucesso!",
          alunos,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  deletar: (req, res) => {
    const { id } = req.params;

    alunosRepository
      .deletar(id)
      .then(() => {
        res.send({ msg: "Alunos deletados com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  atualizar: (req, res) => {
    const alunos = req.body;
    const { id } = req.params;

    alunosRepository
      .atualizar(alunos, id)
      .then(() => {
        res.send({
          msg: "Alunos atualizados com sucesso!",
          alunos,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  
};