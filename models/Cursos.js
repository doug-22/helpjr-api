const mongoose = require('mongoose');

const Cursos = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('cursos', Cursos);