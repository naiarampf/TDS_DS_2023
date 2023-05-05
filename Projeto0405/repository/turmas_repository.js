const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select().from("turma");
  },
  buscaPorId: (id) => {
    return con.select().from("turma").where("id", "=", id);
  },
  inserir: (turma) => {
    return con.insert(turma).into("turma");
  },
  deletar: (id) => {
    return con("turma").where({ id: id }).del();
  },
  atualizar: (turma, id) => {
    return con("funcionarios").update(funcionario).where({ id: id });
  },
};