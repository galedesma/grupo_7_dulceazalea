const { check, validationResult, body } = require('express-validator');

module.exports = [
  check('name')
    .isLength({ min: 7 })
    .withMessage('El Nombre Ingresado Es Demasiado Corto'),

  check('description')
    .isLength({ min: 7, max: 280 })
    .withMessage('La descripción debe tener entre 7 y 120 caracteres'),

  check('price')
    .isInt({ max: 999999 })
    .withMessage('Ingrese el precio del producto'),
];

