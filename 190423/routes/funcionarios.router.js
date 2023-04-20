const express = require("express");

const funcionariosController = require("../controller/funcionarios.controller");

const routes = new express.Router();

routes.get("/", funcionariosController.nomeFuncao);

//routes.post("/:ID[0 - 9]");

module.exports = routes;