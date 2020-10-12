<<<<<<< HEAD
/* const { DataTypes } = require('sequelize/types'); //¿Qué es? */
=======
const { DataTypes } = require('sequelize');
>>>>>>> CRUDusers

module.exports = (sequelize, DataTypes) => { //Corregí el database por DataTypes 
  let alias = 'Products';
  let cols = {
    id_products: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: { //El nombre de la columna esta en español en SQL. Antes: description
      type: DataTypes.STRING(280),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
<<<<<<< HEAD
    id_categories: {
=======
    id_caregories: {
>>>>>>> CRUDusers
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /* created_at: {
      type: DataTypes.DATE,
      allowNull: true
    } */
  };
  let config = {
    tableName: 'products',
<<<<<<< HEAD
    timestamps: false,
    /* underscored: true, */ //Esto agrega un guión bajo antes de una letra mayúscula que no sea la inicial del nombre de la columna. EJ: idProducts = id_Products
=======
    underscored: true,
>>>>>>> CRUDusers
  };

  const Products = sequelize.define(alias, cols, config);

  Products.associate = function(models){ //Establezco relación con tabla categories, hay que cambiar nombre de los models?
    Products.belongsTo(models.Categories,{
      as: 'categoria',
      foreignKey: 'id_categories'
    })
  }

  
  return Products;
};
