function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    connection.query('select * from noticias', callback); 
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    connection.query('select * from noticias where id_noticia = 1', callback); 
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    connection.query('insert into noticias set ? ', noticia, callback);
}

module.exports = function() {
    return NoticiasDAO;
}