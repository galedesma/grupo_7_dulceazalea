const database = require('../data/database');
const dbCategorias = require('../data/categorias.json');
const fs = require('fs');
const path = require('path');

module.exports = {
  //exporto un objeto literal con todos los metodos
  listar: function (req, res) {
    res.render('products', {
      title: 'Todos los Productos',
      productos: database,
    }); //muestra información de prueba
  },
  agregar: function (req, res) {
    res.render('productAdd', {
      title: 'Cargar Producto',
      categorias: dbCategorias,
    });
  },
  detalle: function (req, res) {
    let id = req.params.id;

    let producto = database.filter((producto) => {
      return producto.id == id;
    });
    res.render('productDetail', {
      title: 'Detalle del Producto',
      id: id,
      producto: producto[0],
    });
  },
  publicar: function (req, res, next) {
    let lastID = 1;
    database.forEach(function (producto) {
      if (producto.id > lastID) {
        lastID = producto.id;
      }
    });
    let newProduct = {
      id: lastID + 1,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      colors: req.body.colors,
      price: Number(req.body.price),
      image: req.files[0] ? req.files[0].filename : 'default-image.png',
    };

    database.push(newProduct);

    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'products.json'),
      JSON.stringify(database),
      'utf-8'
    );

    res.redirect('/products');
  },
  mostrar: function (req, res) {
    let id = req.params.id;
    let productoEdit = database.filter((producto) => {
      return producto.id == id;
    });
    res.render('productEdit', {
      title: 'Editar Producto',
      productoEdit: productoEdit[0],
      CantProducts: database.length,
    });
  },
  edit: function (req, res, next) {
    let id = res.params.id;
    res.render();
  },
};
