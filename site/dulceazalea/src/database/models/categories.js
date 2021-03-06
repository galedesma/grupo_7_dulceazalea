/* const { DataTypes } = require('sequelize/types'); //¿Qué es? */

module.exports = (sequelize, DataTypes) => {
  let alias = 'Categories';
  let rols = {
    id_category: {
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
    timestamps: false,
  };
  const Categories = sequelize.define(alias, rols, config);

  Categories.associate = function (models) {
    Categories.hasMany(models.Products, {
      as: 'productos',
      foreignKey: 'id_categories',
    });
  };

  return Categories;
};
