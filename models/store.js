'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      store.belongsTo(models.user);
      store.hasMany(models.product);
    }
  };
  store.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'store',
  });
  return store;
};