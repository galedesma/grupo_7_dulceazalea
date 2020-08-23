const dbProduct = require('../data/database');

module.exports = {
	index: (req, res) => {
		let principal = dbProduct.filter((producto) => {
			return producto.category == 'principal';
		});
		let ofertas = dbProduct.filter((producto) => {
			return producto.category == 'ofertas';
		});
		let masVendidos = dbProduct.filter((producto) => {
			return producto.category == 'masVendidos';
		});

		res.render('home', {
			title: 'Dulce Azalea',

			principal: principal,
			ofertas: ofertas,
			masVendidos: masVendidos,
		});
	},
};
