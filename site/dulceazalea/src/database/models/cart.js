/* const { DataTypes } = require('sequelize/types');
const { sequelize } = require('.'); */

module.exports = (sequelize, DataTypes) => {
  let alias = 'Cart';
  let rols = {
    id_cart: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    users_id_user: {
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

  const Cart = sequelize.define(alias, rols, config);

  Cart.associate = function(models){
    Cart.belongsTo(models.User, {
      as: 'id_user',
      foreignKey: 'users_id_user'
    })
  }

  Cart.associate = function(models){
    Cart.belongsTo(models.Products, {
      as: 'id_products',
      foreignKey: 'product_id'
    })
  }

  return Cart;
};
