/* DEPENDENCIES INLADEN
------------------------------------------------------- */
var express = require('express');
var app = express();

/* SETUP
------------------------------------------------------- */

// Heroku can set the port for the application
var port = process.env.PORT || 3000;

// EJS als view engine
app.set('view engine', 'ejs');

// Express looks for assets in public folder
app.use(express.static(__dirname + '/public'));

/* ROUTERS
------------------------------------------------------- */

app.get('/', function(req, res) {
    res.render('index');
});

app.enable('verbose errors');
app.use(function(req, res, next) {
   res.render('404');
});

/* START APPLICATION
------------------------------------------------------- */
app.listen(port, function() {
    console.log('APP IS RUNNING ON: http://localhost:' + port);
});
