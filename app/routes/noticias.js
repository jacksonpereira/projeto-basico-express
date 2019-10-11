const noticiaController = require('../controllers/noticia');

module.exports = function (app) {
    app.get('/noticias', noticiaController.inserir);
}