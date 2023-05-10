const express = require("express");
const professorController = require("../controller/professor.controller");

const routes = new express.Router();

routes.get("/todos", professorController.buscaTodos);
routes.get("/:id([0-9]+)", professorController.buscaPorId);
routes.post("/post", professorController.inserir);
routes.delete("/:id([0-9]+)", professorController.deletar);
routes.put("/:id([0-9]+)", professorController.atualizar);

module.exports = routes;