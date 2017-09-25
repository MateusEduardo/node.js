var http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.url);
    var categoria = req.url;
    if(categoria == '/tecnologia') {
        res.end("<html><head><meta charset='utf-8'/></head><body>Você chegou na página tecnologia</body></html>");    
    } else if (categoria == '/games') {
        res.end("<html><head><meta charset='utf-8'/></head><body>Você chegou na página games!</body></html>");    
    } else if (categoria ==  '/lazer') {
        res.end("<html><head><meta charset='utf-8'/></head><body>Você chegou na página lazer :)</body></html>");    
    } else {
        res.end("<html><head><meta charset='utf-8'/></head><body>Noticias. Faltou o utf-8, por isso ta sem o coisinho :)</body></html>");    
    }
});
server.listen(3000);