const { sequelize } = require('.');

module.exports = (sequelize, database) => {
  let alias = 'cart';
  let rols = {
    idcart: {},
    Users_id_user: {},
    product_id: {},
  };
  let config = {};

  const cart = sequelize.define(alias, rols, config);

  return cart;
};
