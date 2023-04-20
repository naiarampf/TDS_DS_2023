const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
    nomeFuncao: (req, res) => {
        funcionariosRepository
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    },

    teste: (req, res) => {
        res.send("Olá funcionário");
    }
};