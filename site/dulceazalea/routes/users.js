var express = require('express');
var router = express.Router();
const controller = require('../controllers/usercontroller');
const { Router } = require('express');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', controller.mostrar_Registro);
router.post('/register', controller.ProcesRegister);

router.get('/login', controller.mostrar_Login);
router.post('login', controller.ProcessLogin);

router.get('/profile', controller.profile);
module.exports = router;
