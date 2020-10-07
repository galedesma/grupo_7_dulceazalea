const { sequelize } = require('.');

module.exports = (sequelize, database) => {
  let alias = 'favorite_products';
  let rols = {
    idfavorite_products: {},
    Users_id_user: {},
    product_id: {},
  };
  let config = {};

  const favorite_products = sequelize.define(alias, rols, config);

  return favorite_products;
};
