const database = require('../data/database');
const dbCategorias = require('../data/categorias.json');
const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')

const db = require('../database/models');

module.exports = {
  //exporto un objeto literal con todos los metodos
  listar: function (req, res) {
    db.Products.findAll()
    .then(function(result){
      res.render('products', {
        title: 'Todos los Productos',
        products: result,
        usuario: req.session.usuario,
      }/* ,
      res.send(result) */)
    })
    .catch(function(errors){
      res.send(errors)
    })
    ;
  },
  agregar: function (req, res) {
    db.Categories.findAll()
    .then(function(categorias){
      res.render('productAdd', {
        title: 'Cargar Producto',
        categorias: categorias,
        usuario: req.session.usuario,
      })
    })
    ;
  },
  detalle: function (req, res) {
    db.Products.findByPk(req.params.id,/* { // Por ahora no hace falta hacer uso de la relación entre ambas tablas
      include: [{association: categorias}] //La relación está siendo exportada con el nombre 'categorias', no 'categories'
    } */)
    .then(function(producto){
      res.render('productDetail', {
        title: 'Detalle del Producto',
        producto: producto,
        usuario: req.session.usuario,
      })
    })
    ;
  },
  publicar: function (req, res, next) { //Por qué teníamos un next?
    console.log(validationResult(req));
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Products.create({
        name: req.body.name,
        description: req.body.description,
        id_categories: Number(req.body.category),
        /* colors: req.body.colors, */ //Por ahora no hay columna colors
        price: Number(req.body.price),
        image: req.files[0] ? req.files[0].filename : 'default-image.png'
      })
      .then(function(result){
        console.log(result),
        res.redirect('/products')
      })
      .catch(function(errors){
        res.send(errors)
      })
    } else {
      db.Categories.findAll()
      .then(function(categories){
        res.render('productAdd', {
          title: 'Cargar Producto',
          categories: categories,
          errors: errors.mapped(),
          old: req.body,
        })
      })
      ;
    }
   /*  res.redirect('/products'); */
  },
  mostrar: function (req, res) {
    let productoAEditar = db.Products.findByPk(req.params.id);

    let todasLasCategorias = db.Categories.findAll();

    Promise.all([productoAEditar, todasLasCategorias])
    .then(function([producto, categoria]){
      res.render('productEdit', {
        title: 'Editar Producto',
        producto: producto,
        categorias: categoria,
        usuario: req.session.usuario,
      })
    })
    ;
  },
  edit: function (req, res) {

    db.Products.update({
      name: req.body.name,
      description: req.body.description,
      id_categories: Number(req.body.category),
      price: Number(req.body.price),
      image: req.files[0] ? req.files[0].filename : 'default-image.png'
    },{
      where: {id_products: req.params.id}
    })
    /* let id = req.params.id;
    database.forEach((producto) => {
      if (producto.id == id) {
        producto.id = Number(req.body.id);
        producto.name = String(req.body.name);
        producto.description = req.body.description;
        producto.category = req.body.category;
        producto.colors = req.body.colors;
        producto.price = Number(req.body.price);
        producto.image = req.files[0] ? req.files[0].filename : producto.image;
      }
    }); */
    /* let newDatabase = fs.writeFileSync(
      path.join(__dirname, '../data/products.json'),
      JSON.stringify(database)
    ); */
    res.redirect('/products/' + req.params.id);;

  },
  eliminar: function (req, res) {
    db.Products.destroy({
      where:{id_products: req.params.id}
    })
    res.redirect('/products');
  },
};
