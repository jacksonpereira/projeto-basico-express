var app = require('express')();
var load = require('express-load')
app.set('view engine', 'ejs');
app.set('view', './app/views');

// load('models', { cwd: 'app' })
//     .then('controllers')
//     .then('routes')
//     .into(app);
load('routes', { cwd: 'app' })
    .into(app);

module.exports = app;