const { check, validatorResult, body } = require('express-validator');
const dbUsers = require('../data/dbUsers');
const bcrypt = require('bcrypt');

module.exports = [
  check('email').isEmail().withMessage('Debes ingresar un email válido'),

  // check('password')
  // .isEmpty()
  // .withMessage('Debes ingresar una contraseña'),

  body('email')
    .custom(function (value) {
      let usuario = dbUsers.filter(function (user) {
        return user.email == value;
      });

      if (usuario == false) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage('El usuario no está registrado'),

  // body('password')
  // .custom(function(value,{req}){
  //     let resultado = true;
  //     dbUsers.forEach(function(user){
  //         if(user.email == req.body.email){
  //             if(!bcrypt.compareSync(value, user.password)){
  //                 resultado == false
  //             }
  //         }
  //     });
  //     if(result == false){
  //         return false
  //     }else{
  //         return true
  //     }
  // })
  // .withMessage('Contraseña incorrecta')
];
