const { DataTypes } = require('sequelize/types');

module.exports = (sequelize, database) => {
  let alias = 'categories';
  let rols = {
    idCaregorie: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  };
  let config = {
    tableName: 'categories',
  };
  const categories = sequelize.define(alias, rols, config);

  return categories;
};
