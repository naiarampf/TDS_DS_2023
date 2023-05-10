const con = require("../mysql-connection");

module.exports = {
  buscaTodos: () => {
    return con.select("tur.nro_sala as numeroSala",  "alu.id as aluno", "tur.professor_id as professor","alu.nome as nome" )
    .from("turmas as tur")
    .leftJoin('alunos as alu', 'alu.id', "=", 'tur.aluno_id')
    .leftJoin('professores as prof', 'prof.id', "=", 'tur.professor_id')
  },
  buscaPorId: (id) => {
    return con.select("tur.nro_sala as numeroSala",  "alu.id as aluno", "tur.professor_id as professor", "alu.nome as nome")
    .from("turmas as tur")
    .leftJoin('alunos as alu', 'alu.id', "=", 'tur.aluno_id')
    .leftJoin('professores as prof', 'prof.id', "=", 'tur.professor_id')
    .where("tur.id", "=", id);
  },
  inserir: (turma) => {
    return con.insert(turma).into("turmas");
  },
  deletar: (id) => {
    return con("turmas").where({ id: id }).del();
  },
  atualizar: (turma, id) => {
    return con("turmas").update(turma).where({ id: id });
  },
};