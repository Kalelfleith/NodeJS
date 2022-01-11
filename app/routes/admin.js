module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia", {validacao :{}, noticia:{}});
    });

    app.post('/noticias/salvar', function(req, res){
        //Informações via post o express popula o body com request;
        var noticia = req.body;

        req.assert('title', 'Campo Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Campo Resumo deve conter entre 10 e 100 caracteres').len(10, 100);     
        req.assert('autor', 'Campo Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Campo Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('notice', 'Campo Noticia é obrigatória').notEmpty();
        
        var erros = req.validationErrors();

        if (erros) {
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function (error, result) {        
            res.redirect('/noticias');
        });
    });
}; 
