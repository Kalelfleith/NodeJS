var mysql = require('mysql');

module.exports = function () {
    /*
    Necessário executar essa query no banco:
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
    flush privileges;
    */
    return connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portal_noticias'
    });
};

       