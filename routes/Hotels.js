var express = require('express');
var router = express.Router();

const Hotels_controlers= require('../controllers/Hotels');
var router = express.Router();
/* GET costumes */
router.get('/', Hotels_controlers.Hotels_view_all_Page );
router.get('/detail', Hotels_controlers.Hotels_view_one_Page);
/* GET create costume page */
router.get('/create', Hotels_controlers.Hotels_create_Page);
/* GET create update page */
router.get('/update', Hotels_controlers.Hotels_update_Page);
/* GET create costume page */
router.get('/delete', Hotels_controlers.Hotels_delete_Page);
module.exports = router;
