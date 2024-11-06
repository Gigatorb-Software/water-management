"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      product_name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true },
      category: { type: DataTypes.STRING, allowNull: true },
      price: { type: DataTypes.DECIMAL, allowNull: false },
      stock_quantity: { type: DataTypes.INTEGER, allowNull: false },
      warranty_period: { type: DataTypes.INTEGER, allowNull: true },
      is_active: { type: DataTypes.BOOLEAN, allowNull: false, default: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  Product.associate = function (models) {
    // associations can be defined here
    Product.hasOne(models.User, {
      foreignKey: "userId",
      as: "user", // alias for easier access
    });
  };
  return Product;
};
