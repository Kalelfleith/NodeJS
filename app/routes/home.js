module.exports = function (app) {
    app.get('/', function(app, req, res){
        app.app.controllers.home.index(app, req, res);
    });
}; 
    