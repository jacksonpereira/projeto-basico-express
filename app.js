var app = require('./config/server');
const http = require('http');

//Conexão do banco de dados com mongoose
// var conexãoBanco = require('./config/database');

var rotaNoticias = require('./app/routes/noticias');
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.use(rotaNoticias);

http.createServer(app).listen(3000, function () {
    console.log('Server ON');
});