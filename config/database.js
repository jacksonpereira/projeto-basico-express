var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/portal_noticias");
mongoose.connection.on('connect', function () {
    console.log('Mongoose! Conectado em ' + "mongodb://localhost:27017/portal_noticias");
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose! Disconectado de ' + "mongodb://localhost:27017/portal_noticias");
});
mongoose.connection.on('error', function (erro) {
    console.log('Mongoose! Erro na conexão: ' + erro);
});