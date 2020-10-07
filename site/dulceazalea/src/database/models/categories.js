module.exports = (sequelize, database) => {
  let alias = 'categories';
  let rols = {
    idCaregorie: {},
    name: {},
  };
  let config = {};
  const categories = sequelize.define(alias, rols, config);

  return categories;
};
