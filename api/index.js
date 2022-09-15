var express = require("express");
const cors = require('cors');
var bodyParser = require('body-parser')
var app = express();
const { engine } = require('express-handlebars');

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: null }));
// define qual o template a ser utilizado
app.set('view engine', 'hbs');
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));

app.get("/", function (req, res) {
    res.json({ response: 'Get' });
});

app.post("/", function (req, res) {
    console.log("Nome: " + req.body.nome);
    console.log("Data de nascimento: " + req.body.dataNascimento);
    console.log("Email: " + req.body.email);
    console.log("Sexo: " + req.body.sexo);
    console.log("Telefone: " + req.body.telefone);
    console.log("Celular: " + req.body.celular);
    console.log("Fumante: " + req.body.fumante);
    console.log("Municipio: " + req.body.municipio);

    res.json(
        {
            nome: req.body.nome,
            data_nascimento: req.body.dataNascimento,
            email: req.body.email,
            senha: req.body.senha,
            sexo: req.body.sexo,
            telefone: req.body.telefone,
            celular: req.body.celular,
            fumante: req.body.fumante,
            municipio: req.body.municipio
        }
    )
});

app.listen(3000, function () {
    console.log("Servidor está rodando na porta 3000");
})