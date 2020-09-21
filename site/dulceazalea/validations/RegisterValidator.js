const { check, validationResult, body } = require('express-validator');
const dbUsers = require('../data/dbUsers');
const fs = require('fs');

module.exports = [
  check('first_name')
    .isLength({ min: 3 })
    .withMessage('El Nombre Ingresado Es Demasiado Corto'),

  check('last_name')
    .isLength({ min: 3 })
    .withMessage('El Apellido Ingresado Es Demasiado Corto'),

  check('email').isEmail().withMessage('Ingrese un Email Valido'),

  body('email')
    .custom(function (value) {
      for (let index = 0; index < dbUsers.length; index++) {
        if (dbUsers[index].Email == value) {
          return false;
        }
      }
      return true;
    })
    .withMessage('Usuario ya existente'),

  check('password')
    .isLength({ min: 6, max: 12 })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

  // body('password_confirmation')
  //   .custom(function (value, { req }) {
  //     if (value != req.body.password) {
  //       return false;
  //     }
  //     return true;
  //   })
  //   .withMessage('Las contraseñas no coinciden'),
];
