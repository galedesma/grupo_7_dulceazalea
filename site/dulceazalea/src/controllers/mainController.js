const dbProduct = require('../data/database');
const db = require('../database/models');
let sequelize = require('sequelize');

module.exports = {
  index: (req, res) => {
    // let principal = dbProduct.filter((producto) => {
    //   return producto.categoryHome == 'principal';
    // });
    let principal = [];
    // let ofertas = dbProduct.filter((producto) => {
    //   return producto.categoryHome == 'ofertas';
    // });
    let ofertas = [];
    // let masVendidos = dbProduct.filter((producto) => {
    //   return producto.categoryHome == 'masVendidos';
    // });
    let masVendidos = [];
    let otrosPrducts = [];
    db.Products.findAll().then((result) => {
      // if ((result.id_categories = 2)) {
      //   principal.push(result);
      // } else if ((result.id_categories = 3)) {
      //   masVendidos.push(result);
      // } else if ((result.id_categories = 4)) {
      //   ofertas.push(result);
      // } else {
      //   otrosPrducts.push(result);
      // }
      res.render('home', {
        title: 'Dulce Azalea',
        usuario: req.session.usuario,
        // principal: principal,
        // ofertas: ofertas,
        // masVendidos: masVendidos,
        products: result,
      });
    });
    // .then(() => {
    //   res.render('home', {
    //     title: 'Dulce Azalea',
    //     usuario: req.session.usuario,
    //     principal: principal,
    //     ofertas: ofertas,
    //     masVendidos: masVendidos,
    //     // products: db.Products,
    //   });
    // });
  },
  search: function (req, res) {
    // let busqueda = req.query.search;
    // let titulo;
    let producto;
    // dbProduct.forEach((producto) => {
    //   if (producto.name.toLowerCase().includes(busqueda)) {
    //     productos.push(producto);
    //   }
    // });
    let lookupValue = req.query.search.toLowerCase();
    console.log(req.query.search);
    db.Products.findAll({
      where: {
        name: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('name')),
          'LIKE',
          '%' + lookupValue + '%'
        ),
      },
    })
      .then((product) => {
        // producto.push(product);
        console.log(product + 'ejemplo');
        if (product != null || product != 'undefined') {
          res.render('products', {
            title: 'Resultado de la búsqueda',
            products: product,
            usuario: req.session.usuario,
          });
        }
      })
      // console.log(producto + 'xd');
      // .then(function (result) {
      //
      /* ,
    res.send(result) */
      //   );
      // })
      .catch((errors) => {
        console.log(errors);
      });
  },
  cart: function(req,res){
    res.render('productCart',{
      title: 'Carrito',
      usuario: req.session.usuario
    })
  }
};
