'use strict';
module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('products', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1, allowNull: false },
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
