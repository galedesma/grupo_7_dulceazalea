<<<<<<< HEAD
/* const { DataTypes, INTEGER } = require('sequelize/types');
const config = require('../config/config'); */
=======
const { DataTypes, INTEGER } = require('sequelize');
const config = require('../config/config');
>>>>>>> CRUDusers

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
    address_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  };

  let config = {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  };

  const User = sequelize.define(alias, cols, config);

  return User;
};
