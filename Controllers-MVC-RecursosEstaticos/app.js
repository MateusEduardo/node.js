var msg = require('./mod_exemplo'); //esse módulo vai retornar uma função
var app = require('./config/server');

app.listen(3000, function() {
    console.log(msg());
});