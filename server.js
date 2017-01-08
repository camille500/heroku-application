/* DEPENDENCIES INLADEN
------------------------------------------------------- */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');


/* SETUP
------------------------------------------------------- */
// Body-parser for reading of POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Heroku can set the port for the application
var port = process.env.PORT || 3000;

// EJS als view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ROUTERS INLADEN
------------------------------------------------------- */
var accountRouters = require('./routes/account');

/* ROUTERS INSTELLEN
------------------------------------------------------- */
// Express looks for assets in public folder
app.use(express.static(__dirname + '/public'));

app.use('/account', accountRouters);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
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
