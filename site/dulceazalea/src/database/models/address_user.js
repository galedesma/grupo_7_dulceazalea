const { sequelize } = require('.');

module.exports = (sequelize, database) => {
  let alias = 'address_user';
  let rols = {
    idcart: {},
    Users_id_user: {},
    product_id: {},
  };
  let config = {};
  const addres_user = sequelize.define(alias, rols, config);

  return addres_user;
};
