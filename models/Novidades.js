const mongoose = require('mongoose');

const Novidades = new mongoose.Schema({
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
    },
    data: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('novidades', Novidades);