const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
  buscaTodos: (req, res) => {
    funcionariosRepository
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
    
    console.log(id);
    if (!id) {
      res.status(404).send({ msg: "Parametro id obrigatorio!" });
    }

    funcionariosRepository
      .buscaPorId(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  inserir:(req, res) => {
    const funcionario = req.body;

      if(funcionario.lenght() > 1){
        res.send ({
          msg: "Numero de registros informado é maior que o permitido!",
        });
    }

    funcionariosRepository
    .inserir(funcionario)
    .then(() => {
      res.send({
        msg: "Funcionario inserido com sucesso!",
        funcionario,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  },
  deletar: (req, res) => {
    const { id } = req.params;

    funcionariosRepository
    .deletar(id)
    .then(() => {
      res.send({ msg: "Funcionario deletado com sucesso! "});
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  },
  atualizar: ( req, res) => {
    const funcionario = req.body;
    const {id} = req.params;

    funcionariosRepository
    .atualizar(funcionario, id)
    .then (() => {
        res.send ({
          msg: "Funcionário atualizado com sucesso ",
          funcionario,
      });
  })
  .catch((error) => {
    res.status(500).send(error);
    });
  },
};