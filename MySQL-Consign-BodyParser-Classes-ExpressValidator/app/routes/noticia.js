module.exports = function(application) {
    
    application.get('/noticia', function(req, res) {
    
        var connection = application.config.dbConnection();
        var noticiasDAO = new application.app.models.NoticiasDAO(connection);
        
        noticiasDAO.getNoticia(function(error, result) {
            res.render('noticias/noticia', {noticia : result});
        });        
    });
} 