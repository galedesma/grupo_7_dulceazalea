var express = require('express');
var router = express.Router();
const controller = require('../controllers/usercontroller');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', controller.mostrar_Registro);
router.post('/register');

router.get('/login', controller.mostrar_Login);
router.post('login');
module.exports = router;
