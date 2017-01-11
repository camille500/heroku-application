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
var learnRouters = require('./routes/learn');

/* ROUTERS INSTELLEN
------------------------------------------------------- */
// Express looks for assets in public folder
app.use(express.static(__dirname + '/public'));

app.use('/learn', learnRouters);

app.get('/', function(req, res) {
    res.render('index');
});

pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
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
