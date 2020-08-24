const database = require('../data/database');
const fs = require('fs');
const path = require('path');

module.exports = {
	//exporto un objeto literal con todos los metodos
	listar: function (req, res) {
		let productos = database.filter((producto) => {
			return producto.id;
		});
		res.render('products', {
			title: 'Todos los Productos',
			productos: database,
			productos: productos,
		}); //muestra información de prueba
	},
	agregar: function (req, res) {
		res.render('productAdd', {
			title: 'Cargar Producto',
		});
	},
};
