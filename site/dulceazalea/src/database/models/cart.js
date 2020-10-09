const { DataTypes } = require('sequelize/types');
const { sequelize } = require('.');

module.exports = (sequelize, database) => {
  let alias = 'cart';
  let rols = {
    idcart: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Users_id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  };
  let config = {
    tableName: 'cart',
    underscored: true,
  };

  const cart = sequelize.define(alias, rols, config);

  return cart;
};
