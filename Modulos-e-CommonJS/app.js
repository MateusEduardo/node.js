var msg = require('./mod_exemplo'); //esse módulo vai retornar uma função
var app = require('./config/server');
var noticias = require('./app/routes/noticias')(app);
var formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);
var home = require('./app/routes/home')(app);

app.listen(3000, function() {
    console.log(msg());
});