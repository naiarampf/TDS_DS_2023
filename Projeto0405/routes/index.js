const express = require("express");
const professorRoutes = require("./professor.router");
const alunosRoutes = require("./alunos.router");
const turmasRoutes = require("./turmas.router");

const routes = new express.Router();

routes.use("/professor", professorRoutes);
routes.use("/turmas", turmasRoutes);
routes.use("/alunos", alunosRoutes);

module.exports = routes;