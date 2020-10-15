var express = require('express');
var router = express.Router();
const controller = require('../controllers/usercontroller');
const RegisterValidator = require('../validations/RegisterValidator');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const upImageAvatar = require('../middlewares/upImageAvatar');
//const { Router } = require('express'); ???

const loginValidator = require('../validations/loginValidator');

router.get('/register', controller.mostrar_Registro);
router.post(
  '/register',
  upImageAvatar.any(),
  RegisterValidator,
  controller.ProcessRegister
);

router.get('/login', controller.mostrar_Login);
router.post('/login', loginValidator, controller.processLogin);

router.get('/profile', controller.profile);
router.put('/editProfile/:id', upImageAvatar.any(), controller.editProfile); //,
router.delete('/delete/:id', controller.delete);
router.get('/logout', controller.logout);

module.exports = router;
