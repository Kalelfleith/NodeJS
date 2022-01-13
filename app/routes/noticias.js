module.exports = function (app) {

    app.get('/noticias', function(app, res){
        app.app.controllers.noticias.noticias(app, res);
    });

    app.get('/noticia', function(req, res){
        app.app.controllers.noticias.noticia(app, res);
    });
};
