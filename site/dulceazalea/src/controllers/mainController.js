const dbProduct = require('../data/database');
const db = require('../database/models');

module.exports = {
  index: (req, res) => {
    let principal = dbProduct.filter((producto) => {
      return producto.categoryHome == 'principal';
    });
    let ofertas = dbProduct.filter((producto) => {
      return producto.categoryHome == 'ofertas';
    });
    let masVendidos = dbProduct.filter((producto) => {
      return producto.categoryHome == 'masVendidos';
    });

    res.render('home', {
      title: 'Dulce Azalea',
      usuario: req.session.usuario,
      principal: principal,
      ofertas: ofertas,
      masVendidos: masVendidos,
    });
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
    console.log(req.query.search);
    db.Products.findAll({
      where: {
        name: req.query.search,
      },
    }).then((product) => {
      // producto.push(product);
      console.log(product);
      res.render('products', {
        title: 'Resultado de la búsqueda',
        products: product,
        usuario: req.session.usuario,
      });
    });
    // console.log(producto + 'xd');
    // .then(function (result) {
    //
    /* ,
    res.send(result) */
    //   );
    // })
    // .catch((errors) => {
    //   console.log(errors);
    // });
  },
};
