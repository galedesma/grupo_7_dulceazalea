var express = require('express');
var router = express.Router();

const controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/carrito', controller.carrito);
module.exports = router;
