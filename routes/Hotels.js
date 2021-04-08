var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Hotels', { title: 'Hotels Search Results' });
});

module.exports = router;
