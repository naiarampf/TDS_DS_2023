const express = require ("express");

const funcionariosRoutes = require("./funcionarios.router");

const routes = new express.Router();

routes.get("/", funcionariosRoutes);

module.exports = routes;

