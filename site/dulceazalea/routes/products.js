const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/products');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

router.get('/', controller.listar); //1)Listado de productos/3)Detalle de un producto en particular
router.get('/create', controller.agregar); //2)Formulario de creación de productos
router.get('/:id', controller.detalle); //detalle de producto
router.post('/create', upload.any(), controller.publicar); //4)Acción de creación (a dónde se envía el formulario)
router.get('/edit/:id', controller.mostrar); //5)Formulario de edición de productos
router.put('/:id', upload.any(), controller.edit); //6)Acción de edición (a dónde se envía el formulario)
router.delete('/delete/:id'); //7)Acción de borrado

module.exports = router;
