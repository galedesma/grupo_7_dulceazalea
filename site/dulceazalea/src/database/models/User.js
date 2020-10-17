/* const { DataTypes, INTEGER } = require('sequelize/types');
const config = require('../config/config'); */

const favorite_products = require('./favorite_products');

module.exports = (sequelize, DataTypes) => {
  let alias = 'Users';
  let cols = {
    id_user: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    user_mail: {
      type: DataTypes.SMALLINT(45),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(45),
    },
    rol: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING(100),
    },
    department: {
      type: DataTypes.STRING(45),
    },
  };

  let config = {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  };

  const User = sequelize.define(alias, cols, config);
  User.associate = function (models) {
    User.hasOne(models.favorite_products, {
      as: 'favorite_product',
      foreignKey: 'users_id_user',
    });
  };
  return User;
};
