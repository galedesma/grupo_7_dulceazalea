const { check, validationResult, body } = require('express-validator');
const dbUsers = require('../data/dbUsers');
const fs = require('fs');

const db = require('../database/models');

module.exports = [
  check('first_name')
    .isLength({ min: 3 })
    .withMessage('El Nombre Ingresado Es Demasiado Corto'),

  check('last_name')
    .isLength({ min: 3 })
    .withMessage('El Apellido Ingresado Es Demasiado Corto'),

  check('email').isEmail().withMessage('Ingrese un Email Valido'),

  body('email').custom(function (value) {
    console.log(value);

    return db.Users.findOne({
      where: {
        user_mail: value,
      },
    }).then((user) => {
      if (user) {
        return Promise.reject('Usuario ya existente');
      }
    });
  }),
  check('email').isEmail().withMessage('Debes ingresar un email válido'),

  check('password')
    .isLength({ min: 6, max: 12 })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

  body('password_confirmation')
    .custom(function (value, { req }) {
      if (value != req.body.password) {
        return false;
      }
      return true;
    })
    .withMessage('Las contraseñas no coinciden'),
];
