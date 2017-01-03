/* DEPENDENCIES INLADEN
--------------------------------------------------------- */
var express = require('express');
var app = express();

/* SETUP
--------------------------------------------------------- */

// Heroku can set the port for the application
var port = process.env.PORT || 8080;

// EJS als view engine
app.set('view engine', 'ejs'); 

// Express looks for assets in public folder
app.use(express.static(__dirname + '/public'));

/* ROUTERS
--------------------------------------------------------- */

app.get('/', function(req, res) {
    res.render('index');
});


/* START APPLICATION
--------------------------------------------------------- */
app.listen(port, function() {
    console.log('The Heroku APP is running on: http://localhost:' + port);
});