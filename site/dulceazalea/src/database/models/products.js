module.exports = (sequelize, database) => {
  let alias = 'Products';
  let cols = {
    idProducts: {},
    name: {},
    description: {},
    price: {},
    Categoria_idCaregorias: {},
    image: {},
  };
  let config = {};

  const Products = sequelize.define(alias, cols, config);

  return Products;
};
