const { check, validatorResult, body } = require('express-validator');
const dbUsers = require('../data/dbUsers');
const bcrypt = require('bcrypt');

const db = require('../database/models');

module.exports = [
  check('email').isEmail().withMessage('Debes ingresar un email válido'),

  check('password')
    .isLength({ min: 1 })
    .withMessage('Debes ingresar una contraseña'),

  body('email').custom(function (value) {
    return db.Users.findOne({
      where: { user_mail: value },
    })
      .then(console.log(value + 'validator email login'))
      .then((user) => {
        if (!user) {
          return Promise.reject('email no registrado');
        }
      });
  }),

  body('password').custom(function (value, { req }) {
    return db.Users.findOne({
      where: { user_mail: req.body.email },
    });
    then((user) => {
      if (!bcrypt.compareSync(value, user.dataValues.password)) {
        return Promise.reject('no');
      }
    }).catch(() => {
      return Promise.reject('Contraseña incorrecta');
    });
  }),
];
