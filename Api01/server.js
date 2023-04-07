const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/', [] , (req, resp) => {
    resp.send("PEGA A GUANABARA E VEM!");
});

app.post('/login', [] ,(req, resp) => {
    resp.send(req.body);
});


app.listen(8080, () => {
    console.log("Meu servidor esta rodando na porta 8080");
    }
);


