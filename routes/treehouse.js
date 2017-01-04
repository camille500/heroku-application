/* DEPENDENCIES INLADEN
------------------------------------------------------- */
const express = require('express');
const router = express.Router();

/* MAIN USER ROUTER
------------------------------------------------------- */
router.get('/', function(req, res) {
  res.render('treehouse/index');
});

module.exports = router;
