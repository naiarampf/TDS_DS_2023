const express = require("express");
const professorRoutes = require("./professor.route");
const alunosRoutes = require("./alunos.route");
const turmasRoutes = require("./turmas.route");

const routes = new express.Router();

routes.use("/professor", professorRoutes);
routes.use("/turmas", turmasRoutes);
routes.use("/alunos", alunosRoutes);

module.exports = routes;