var express = require('express');
var router = express.Router();

const cookieCheck = require('../middlewares/cookieCheck');
const controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', cookieCheck, controller.index);
router.get('/search', controller.search);
router.get('/carrito', cookieCheck, controller.cart);
router.get('/error', function (req, res) {
  res.render('placeholder', {
    title: 'Ocurrió un error',
  });
}); //Agrego una vista para todo aquello que falta crear

module.exports = router;
