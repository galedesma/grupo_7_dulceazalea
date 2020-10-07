const { DataTypes, INTEGER } = require('sequelize/types');
const config = require('../config/config');

module.exports = (sequelize, database) => {
  let alias = 'Users';
  let cols = {
    id: {
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
    },
    address_user: {},
  };

  let config = {
    tableName: 'users',
    timestamps: true,
    underscored: true,
  };

  const User = sequelize.define(alias, cols, config);

  return User;
};
