const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize, database) => {
  let alias = 'address_user';
  let rols = {
    id_user_direccion: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'address_user',
    underscored: true,
  };
  const addres_user = sequelize.define(alias, rols, config);

  return addres_user;
};
