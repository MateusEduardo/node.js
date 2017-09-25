var express = require('express')();
express.set('view engine', 'ejs');
express.set('views', './app/views');

module.exports = express;