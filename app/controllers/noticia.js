const noticia = require('../models/noticia');

module.exports = {

    inserir(req, res) {
        var teste = new noticia({ titulo: 'aiwudhiauhwdahwiudaw', conteudo: 'awudhauwhduahwidhawdawd' });
        teste.save();
        console.log(teste)
        res.json({ resposta: 'salvo com sucesso!' })
    }
}

