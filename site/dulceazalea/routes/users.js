var express = require('express');
var router = express.Router();
const controller = require('../controllers/usercontroller');
//const { Router } = require('express'); ???

const loginValidator = require('../validations/loginValidator');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', controller.mostrar_Registro);
router.post('/register', controller.processRegister);

router.get('/login', controller.mostrar_Login);
router.post('login', loginValidator, controller.processLogin);

router.get('/profile', controller.profile);

module.exports = router;
