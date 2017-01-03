/* DEPENDENCIES INLADEN
------------------------------------------------------- */
var express = require('express');
var router = express.Router();

/* MAIN USER ROUTER
------------------------------------------------------- */
router.get('/', function(req, res) {
  res.render('users/index');
});

module.exports = router;
