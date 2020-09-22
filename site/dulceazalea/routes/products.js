const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController');
const productValidator = require('../validations/productValidator');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const upImageProduct = require('../middlewares/upImageProduct');

router.get('/', controller.listar); //1)Listado de productos/3)Detalle de un producto en particular
router.get('/create', sessionUserCheck, controller.agregar); //2)Formulario de creación de productos
router.get('/:id', controller.detalle); //detalle de producto
router.post(
  '/create',
  upImageProduct.any(),
  productValidator,
  controller.publicar
); //4)Acción de creación (a dónde se envía el formulario)

router.get('/edit/:id', sessionUserCheck, controller.mostrar); //5)Formulario de edición de productos
router.put('/sent/:id', upImageProduct.any(), controller.edit); //6)Acción de edición (a dónde se envía el formulario)
router.delete('/delete/:id', controller.eliminar); //7)Acción de borrado

module.exports = router;
