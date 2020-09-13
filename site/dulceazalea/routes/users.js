var express = require('express');
var router = express.Router();
const controller = require('../controllers/usercontroller');
const { Router } = require('express');

const RegisterValidator = require('../validators/RegisterValidator');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', controller.mostrar_Registro);
router.post('/register', RegisterValidator, controller.ProcessRegister);

router.get('/login', controller.mostrar_Login);
// router.post('login', controller.ProcessLogin);

router.get('/profile', controller.profile);
module.exports = router;
