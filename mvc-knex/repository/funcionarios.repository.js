const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select().from("funcionarios");
  },
  buscaPorId: (id) => {
    return con.select().from("funcionarios").where("id", "=", id);
  },
  inserir: (funcionario) => {
    return con.insert(funcionario).into("funcionarios");
  },
  deletar: (id) => {
    return con("funcionarios").where({id: id }).del();
  },
  atualizar: (funcionario, id) => {
    return con("funcionarios").update(funcionario).where({id: id});
  },
};
