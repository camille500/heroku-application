/* DEPENDENCIES INLADEN
------------------------------------------------------- */
const express = require('express');
const router = express.Router();

/* MAIN ACCOUNT ROUTER
------------------------------------------------------- */
router.get('/', function(req, res) {
  res.render('account/index');
});

module.exports = router;
