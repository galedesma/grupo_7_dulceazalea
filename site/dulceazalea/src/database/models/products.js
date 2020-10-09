const { DataTypes } = require('sequelize/types');

module.exports = (sequelize, database) => {
  let alias = 'Products';
  let cols = {
    idProducts: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(280),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    Categoria_idCaregorias: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: 'products',
    timestamps: true,
    underscored: true,
  };

  const Products = sequelize.define(alias, cols, config);

  return Products;
};
