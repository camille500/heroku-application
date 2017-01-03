/* DEPENDENCIES INLADEN
------------------------------------------------------- */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/* SETUP
------------------------------------------------------- */
// Body-parser for reading of POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Heroku can set the port for the application
var port = process.env.PORT || 3000;

// EJS als view engine
app.set('view engine', 'ejs');

/* ROUTERS INLADEN
------------------------------------------------------- */
var userRouters = require('./routes/users');

/* ROUTERS INSTELLEN
------------------------------------------------------- */
// Express looks for assets in public folder
app.use(express.static(__dirname + '/public'));

app.use('/users', userRouters);

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
