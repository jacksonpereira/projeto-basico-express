var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noticia = new Schema({
    titulo: { type: String, require: true },
    conteudo: String
});

module.exports = mongoose.model('noticia', noticia);