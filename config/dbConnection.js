var mysql = require('mysql');

var connMySQL = function () {
    /*
    Necessário executar essa query no banco:
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
    flush privileges;
    */
    console.log('Conexão com o banco de dados estabelecida');
    return connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portal_noticias'
    });
}

module.exports = function () {
    console.log('Autoload carregou o módulo de conexão com o bd');
    return connMySQL;
};

       