var mongo = require('mongodb');

var conMongoDB = function() {
    var db = new mongo.Db(
        'got', //banco
        new mongo.Server(
            'localhost', //endereço do servidor
            '27017', //porta
            {} //configurações opcionais
        ),
        {} //configurações opcionais
    );

    return db;
}

// exporta a variável para fazer a conexão somente quando necessário
module.exports = function() {
    return conMongoDB;
}