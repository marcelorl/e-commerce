'use strict';
module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('products', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    factor: DataTypes.CHAR
  }, {
    timestamps: false
  });

  return Product;
};
