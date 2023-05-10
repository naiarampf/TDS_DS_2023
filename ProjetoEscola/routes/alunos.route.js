const express = require("express");
const alunosController = require("../controller/alunos.controller");

const routes = new express.Router();

routes.get("/todos", alunosController.buscaTodos);
routes.get("/:id([0-9]+)", alunosController.buscaPorId);
routes.post("/post", alunosController.inserir);
routes.delete("/:id([0-9]+)", alunosController.deletar);
routes.put("/:id([0-9]+)", alunosController.atualizar);

module.exports = routes;