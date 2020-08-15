var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('home', { title: 'Dulce Azalea' });
});

module.exports = router;
