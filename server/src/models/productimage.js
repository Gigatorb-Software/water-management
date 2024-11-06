'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define(
    "ProductImage",
    {
      productId: { type: DataTypes.INTEGER, allowNull: false },
      image_url: { type: DataTypes.STRING },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  ProductImage.associate = function(models) {
    // associations can be defined here
      ProductImage.belongsTo(models.Product, {
        foreignKey: "productId",
      });
  };
  return ProductImage;
};