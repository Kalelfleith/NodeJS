//require função javascript que permite incorporar outros arquivos ao seu arquivo. (importar módulo, biblioteca, outras páginas.....) - Acrescentar algo ao script
var http = require('http');

//Criar servidor - método da biblioteca http
    //Passando uma função como parâmetro
var server = http.createServer(function(req, res){

    var categoria = req.url;

    if (categoria == '/tec'){
        res.end("<html><body>Noticias de Tecnologias</body></html>");     
    }else if (categoria == '/ferm'){
        res.end("<html><body>Noticias de Ferm</body></html>"); 
    } else {
        //Resposta da requisição feita ao servidor
        res.end("<html><body>Portal de Noticias</body></html>");
    }

});

//servidor sendo escutado na porta 3000
server.listen(3000);