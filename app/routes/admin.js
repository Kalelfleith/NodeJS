module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        //Informações via post o express popula o body com request;
        var noticia = req.body;

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function (error, result) {        
            res.redirect('/noticias');
        });
    });
}; 
