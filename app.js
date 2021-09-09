require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("./models/Novidades");
require("./models/Cursos");
const Novidade = mongoose.model('novidades');
const Curso = mongoose.model('cursos');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET")
    app.use(cors());
    next();
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.get("/listarnovidades", (req, res) => {
    Novidade.find({}).then((novidade) => {
        return res.json(novidade);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhuma novidade encontrada!"
        })
    })
});

app.post("/cadastrarnovidades", (req, res) => {
    const novidade = Novidade.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Novidade não cadastrada com sucesso!"
        })

        return res.status(200).json({
            error: false,
            message: "Novidade cadastrada com sucesso!"
        })
    });
});

app.get("/listarcursos", (req, res) => {
    Curso.find({}).then((curso) => {
        return res.json(curso);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum curso encontrado!"
        })
    })
});

app.post("/cadastrarcursos", (req, res) => {
    const curso = Curso.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Curso não cadastrado com sucesso!"
        })

        return res.status(200).json({
            error: false,
            message: "Curso cadastrado com sucesso!"
        })
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});