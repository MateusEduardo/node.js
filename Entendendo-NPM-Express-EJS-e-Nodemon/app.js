var express = require('express')();
express.set('view engine', 'ejs');

express.get('/', function(req, res) {
    res.render("home/index");
});

express.get('/adicionarnoticia', function(req, res) {
    res.render("admin/form_add_noticia");
});

express.get('/noticias', function(req, res) {
    res.render("noticias/noticias");
});

express.get('/tecnologia', function(req, res) {
    res.render("secao/tecnologia");
});

express.get('/games', function(req, res) {
    res.render("secao/games");
});

express.get('/lazer', function(req, res) {
    res.render("secao/lazer");
});

express.listen(3000, function() {
    console.log("servidor rodando com express");
});