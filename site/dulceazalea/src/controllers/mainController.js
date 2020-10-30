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
    db.Products.findOne({
      where: {
        name: req.query.search,
      },
    })
      // .then((element) => {
      //   productos.push({
      //     id_products: element.id_products,
      //     name: element.name,
      //     description: element.description,
      //     price: element.price,
      //     id_categories: element.id_categories,
      //     image: element.image,
      //   });
      // });
      // //  dbProduct.forEach((producto) => {
      // //   if (producto.category.toLowerCase().includes(busqueda)) {
      // //     productos.push(producto);
      // //   }
      // if (productos.length == 0) {
      //   titulo = 'Producto no encontrado';
      // } else {
      //   titulo = 'Resultado de la búsqueda';
      // }
      // res.render('products', {
      //   title: titulo,
      //   products: productos,
      //   usuario: req.session.usuario,
      // });
      .then((product) => {
        producto = {
          id_products: product.id_products,
          name: product.name,
          description: product.description,
          price: product.price,
          id_categories: product.id_categories,
          image: product.image,
        };
      });
    console.log(producto);
    // .then(function (result) {
    res.render('productsSearch', {
      title: 'Resultado de la búsqueda',
      products: producto,
      usuario: req.session.usuario,
    }); /* ,
    res.send(result) */
    //   );
    // })
    // .catch((errors) => {
    //   console.log(errors);
    // });
  },
};
