var express = require('express');
var router = express.Router();

const Hotels_controlers= require('../controllers/Hotels');
var router = express.Router();
/* GET costumes */
router.get('/', Hotels_controlers.Hotels_view_all_Page );
module.exports = router;

module.exports = router;
