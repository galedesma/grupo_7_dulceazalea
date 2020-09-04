const dbProduct = require('../data/database');

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

      principal: principal,
      ofertas: ofertas,
      masVendidos: masVendidos,
    });
  },
  search: function (req, res) {
    let busqueda = req.query.search;
    let productos = [];
    let titulo;
    dbProduct.forEach((producto) => {
      if (producto.name.toLowerCase().includes(busqueda)) {
        productos.push(producto);
      }
    });
    /* dbProduct.forEach((producto) => {
      if (producto.category.toLowerCase().includes(busqueda)) {
        productos.push(producto);
      }
    }) */;
    if (productos.length == 0) {
      titulo = 'Producto no encontrado';
    } else {
      titulo = 'Resultado de la búsqueda';
    }
    res.render('products', {
      title: titulo,
      productos: productos,
    });
  },
};
