const express = require("express");
const routes = require("./routes/index.js");

const app = express();

app.use(express.json());

app.use(routes);

app.get('/sucesso', [] , (req, resp) => {
    resp.send({ data: "SUCESSO!"});
});

app.post('/login', (req, resp) => {
    //const usuario = request.body.usuario;
    //const senha = request.body.senha;
    const{ usuario, senha} = req.body;

    resp.send({
    message : "Autenticação feita com sucesso!",
    data: `${usuario} - ${senha}`, });
});


app.listen(8080, (error) => {
    if(error){
        console.log(error)
     } else {
        console.log("Servidor está em execução na porta 8080.");
     }
    });

