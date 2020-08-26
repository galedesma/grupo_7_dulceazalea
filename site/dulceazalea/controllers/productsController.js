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
		// let Categoria = database.filter((producto) => {
		// 	return producto.category;
		// });
		res.render('productAdd', {
			title: 'Cargar Producto',
			// categoria: categoria,
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
	edit: function (req, res) {
		let id = req.params.id;
		let productoEdit = database.filter((producto) => {
			return producto.id == id;
		});
		res.render('productEdit', {
			title: 'Editar Producto',
			productoEdit: productoEdit[0],
		});
	},
};
